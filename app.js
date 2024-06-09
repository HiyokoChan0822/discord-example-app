import 'dotenv/config';
import { InteractionType, InteractionResponseType } from 'discord-interactions';
import { Client } from 'discord.js';
import { getResTest } from './test.js';
import {
  getResRecruiting,
  getResRecruitingEntry,
  getResRecruitingMatching,
  getResRecruitingReset,
} from './recruiting.js';
import {
  getResGacha,
  getResGachaHero,
  getResGachaCard,
} from './gacha.js';

let req = {};

const client = new Client({ intents: [1] });

// TODO: app.post()で実装
client.on('interactionCreate', async res => {
  req = res;
  const { type, data } = getInteraction();
  try {
    switch ( type ) {
      case InteractionResponseType.PONG:
        res.ping(data);
        break;
      case InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE:
        res.reply(data);
        break;
      case InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE:
        res.reply(data);
        break;
      case InteractionResponseType.DEFERRED_UPDATE_MESSAGE:
        res.update(data);
        break;
      case InteractionResponseType.UPDATE_MESSAGE:
        res.update(data);
        break;
      case InteractionResponseType.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT:
        res.update(data);
        break;
      case InteractionResponseType.MODAL:
        res.showModal(data);
        break;
      default:
        return;
    };
  } catch (err) {
    console.error(err);
  };
});

client.login(process.env.DISCORD_TOKEN);

/** 
 * Get response for interaction type
 * @param {Option} data - Interaction data payload
 * @return {Option}
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
 */
function getInteraction() {
  const { type } = req;

  switch ( type ) {
    case InteractionType.PING:
      return getResPing();
    case InteractionType.APPLICATION_COMMAND:
      return getResAppricationCommand();
    case InteractionType.MESSAGE_COMPONENT:
      return getResMessegeComponent();
    case InteractionType.APPLICATION_COMMAND_AUTOCOMPLETE:
      return getResApplicationCommandAutocomplete();
    case InteractionType.MODAL_SUBMIT:
      return getResModalSubmit();
    default:
      return getResError('Interaction type error');
  };
};

/** 
 * Get response for ping
 * @return {Option}
 */
function getResPing(){
  return { type: InteractionResponseType.PONG };
};

/** 
 * コマンド
 * Get response for apprication command
 * @return {Option}
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
function getResAppricationCommand() {
  const { commandName } = req;

  switch ( commandName ) {
    case 'test':
      return getResTest();
    case 'recruiting':
      return getResRecruiting();
    case 'gacha':
      return getResGacha();
    default:
      return getResError('Apprication command error');
  };
};

/** 
 * ボタン・セレクトメニュー
 * Get response for message component
 * @return {Option}
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
function getResMessegeComponent() {
  const { customId } = req;

  switch ( customId ) {
    case 'recruiting-entry':
      return getResRecruitingEntry();
    case 'recruiting-matching':
      return getResRecruitingMatching();
    case 'recruiting-reset':
      return getResRecruitingReset();
    case 'gacha-heros':
      return getResGachaHero();
    case 'gacha-cards':
      return getResGachaCard();
    default:
      return getResError('Message component response error');
  };
};

/** 
 * モーダル
 * Get response for modal submit
 * @return {Option}
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure
 */
function getResModalSubmit() {
  const { customId } = req;

  switch ( customId ) {
    default:
      return getResError('Modal submit error');
  };
};

/** 
 * Get response for error
 * @return {Option}
 */
export function getResError(str) {
  return { 
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: { content: str },
  };
};

export function getReqSubCommand() {
  return req.options._subcommand;
};

export function getUserId() {
  return req.member.user.id;
};

export function getReqEmbeds() {
  return req.message.embeds;
};

export function getReqComponents() {
  return req.message.components;
};
