import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

/**
 * @type {Object} Test command
 */
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  default_member_permission: false,
  type: 1,
};

/**
 * @type {Object} Bio command
 */
const BIO_COMMAND = {
  name: 'bio',
  description: 'Bio command',
  default_member_permission: false,
  options: [
    {
      name: 'button',
      description: 'Set bio buttons',
      default_member_permission: false,
      type: 1,
    },
  ],
  type: 1,
};

/**
 * @type {Object} Recruiting command
 */
const RECRUITING_COMMAND = {
  name: 'recruiting',
  description: 'Recruiting member',
  default_member_permission: true,
  options: [
    {
      name: 'custom',
      description: 'Recruiting member for custom battle',
      type: 1,
    },
  ],
  type: 1,
};

/**
 * @type {Object} Gacha command
 */
const GACHA_COMMAND = {
  name: 'gacha',
  description: 'Get hero or card gacha results',
  default_member_permission: true,
  options: [
    {
      name: 'heros',
      description: 'Get hero gacha results',
      options: [
        {
          name: 'attacker',
          description: 'Include attacker hero? (default: true)',
          type: 5,
          required: false,
        },
        {
          name: 'gunner',
          description: 'Include gunner hero? (default: true)',
          type: 5,
          required: false,
        },
        {
          name: 'tank',
          description: 'Include tank hero? (default: true)',
          type: 5,
          required: false,
        },
        {
          name: 'sprinter',
          description: 'Include sprinter hero? (default: true)',
          type: 5,
          required: false,
        },
      ],
      type: 1,
    },
    {
      name: 'cards',
      description: 'Get card gacha results',
      options: [
        {
          name: 'ur',
          description: 'include UR card? (default: true)',
          type: 5,
          required: false,
        },
        {
          name: 'sr',
          description: 'include SR card? (default: false)',
          type: 5,
          required: false,
        },
        {
          name: 'r',
          description: 'include R card? (default: false)',
          type: 5,
          required: false,
        },
        {
          name: 'n',
          description: 'include N card? (default: false)',
          type: 5,
          required: false,
        },
      ],
      type: 1,
    },
  ],
};

/**
 * @type {Object} Quiz command
 */
const QUIZ_COMMAND = {
  name: 'quiz',
  description: 'Quiz command',
  default_member_permission: false,
  type: 1,
};

/**
 * @type {Object} Score command
 */
const SCORE_COMMAND = {
  name: 'score',
  description: 'Score command',
  default_member_permission: false,
  type: 1,
};

/**
 * @type {Object} Generator command
 */
const GENERATOR_COMMAND = {
  name: 'generator',
  description: 'Generator command',
  default_member_permission: false,
  type: 1,
};

/**
 * @type {Object} Point command
 */
const POINT_COMMAND = {
  name: 'point',
  description: 'Point command',
  default_member_permission: false,
  type: 1,
};

/**
 * @type {Object} Contact command
 */
const CONTACT_COMMAND = {
  name: 'contact',
  description: 'Contact command',
  default_member_permission: false,
  type: 1,
};

/**
 * @type {Object} Help command
 */
const HELP_COMMAND = {
  name: 'help',
  description: 'Help command',
  default_member_permission: false,
  type: 1,
};

/**
 * @type {Object} All commands
 */
const ALL_COMMANDS = [
  TEST_COMMAND,
  RECRUITING_COMMAND,
  GACHA_COMMAND,
];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);