const CPS_IMG_URL = 'https://cps-down.hangame.co.jp/web/img';

export const heros = [
  {
    id: 1,
    name: "十文字 アタリ",
    role: "スプリンター",
    type: "通常",
    graph: [1.00, 1.00, 1.00],
    skill: [
      "モンスターで周囲を自動攻撃(被ダメージで消滅)",
      "長押し：ダッシュ",
      "死亡から復活直後 移動速度アップ",
    ],
    performance: [3, 3, 3, 3],
    image: {
      url: `${CPS_IMG_URL}/char/kz00_1240.png`
    }
  },
  {
    id: 2,
    name: "ジャスティス ハンコック",
    role: "タンク",
    type: "通常",
    a: 1.50,
    b: 1.50,
    h: 0.95,
    hs: "連合宇宙軍に 全拠点へのレーザー空爆を命令",
    ha: "長押し：バリア",
    ab: "周囲にいる味方の防御力アップ",
    image: {
      url: `${CPS_IMG_URL}/char/jt00_1240.png`
    }
  },
  {
    id: 3,
    name: "リリカ",
    role: "ガンナー",
    type: "通常",
    a: 1.15,
    b: 0.60,
    h: 0.80,
    hs: "味方を魅了し 一時的に攻撃力と防御力を超アップ",
    ha: "長押し：タメ攻撃",
    ab: "防衛中のポータルエリア内にいる 味方の攻撃力アップ",
    image: {
      url: `${CPS_IMG_URL}/char/mg00_1240.png`
    }
  },
  {
    id: 4,
    name: "双挽 乃保",
    role: "アタッカー",
    type: "通常",
    a: 1.50,
    b: 1.20,
    h: 0.90,
    hs: "覚醒して 一定時間 超高速で行動することができる",
    ha: "長押し：全回復リスタート+速度アップ",
    ab: "死亡時 愛用チェーンソウを落として爆破",
    image: {
      url: `${CPS_IMG_URL}/char/cg00_1240.png`
    }
  },
  {
    id: 5,
    name: "桜華 忠臣",
    role: "アタッカー",
    type: "通常",
    a: 1.40,
    b: 0.75,
    h: 1.10,
    hs: "禁呪を解放し 前方遠距離に絶大ダメージ",
    ha: "長押し：突進タメ攻撃",
    ab: "前方近距離攻撃カード攻撃力アップ+クールダウン時間短縮",
    image: {
      url: `${CPS_IMG_URL}/char/cm00_1240.png`
    }
  },
  {
    id: 6,
    name: "ジャンヌ ダルク",
    role: "タンク",
    type: "通常",
    a: 0.85,
    b: 0.95,
    h: 1.50,
    hs: "味方全員 死亡しても一度だけその場で復活できる",
    ha: "長押し：周囲ライフ回復",
    ab: "死亡時に仲間のライフ全回復",
    image: {
      url: `${CPS_IMG_URL}/char/jn00_1240.png`
    }
  },
  {
    id: 7,
    name: "マルコス'55",
    role: "アタッカー",
    type: "通常",
    a: 1.05,
    b: 0.80,
    h: 0.80,
    hs: "気を高めて変身パワーアップ (最高3段階まで強化)",
    ha: "長押し：攻撃ヒットでワープ",
    ab: "リリカの近くでヒーロースキルパワーが自動で溜まる",
    image: {
      url: `${CPS_IMG_URL}/char/nt00_1240.png`
    }
  },
  {
    id: 8,
    name: "ルチアーノ",
    role: "ガンナー",
    type: "通常",
    a: 1.30,
    b: 0.50,
    h: 0.85,
    hs: "一時自分以外の時間を止める(停止中は超攻撃力)",
    ha: "長押し：バックステップ攻撃",
    ab: "遠距離攻撃カード 攻撃力アップ+クールダウン時間短縮",
    image: {
      url: `${CPS_IMG_URL}/char/hm00_1240.png`
    }
  },
  {
    id: 9,
    name: "Voidoll",
    role: "スプリンター",
    type: "通常",
    a: 0.90,
    b: 1.40,
    h: 0.90,
    hs: "周囲の敵ヒーローを スタート地点に強制送還",
    ha: "長押し：ダッシュ",
    ab: "ライフ50％以下で 移動速度アップ",
    image: {
      url: `${CPS_IMG_URL}/char/rb00_1240.png`
    }
  },
  {
    id: 10,
    name: "深川 まとい",
    role: "ガンナー",
    type: "通常",
    a: 1.40,
    b: 0.70,
    h: 0.90,
    hs: "一定時間 敵ヒーローを攻撃する タレット出現",
    ha: "長押し：火筒タメ攻撃",
    ab: "火属性の 攻撃力アップ",
    image: {
      url: `${CPS_IMG_URL}/char/fg00_1240.png`
    }
  },
  {
    id: 11,
    name: "ソル＝バッドガイ",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/gs00_1240.png`
    }
  },
  {
    id: 12,
    name: "ディズィー",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/gd00_1240.png`
    }
  },
  {
    id: 13,
    name: "グスタフ ハイドリヒ",
    role: "タンク",
    type: "通常",
    a: 1.30,
    b: 1.50,
    h: 1.50,
    hs: "猛毒で全敵に割合ダメージ（最大ライフ10%に減衰）",
    ha: "長押し：回復+周囲毒",
    ab: "バトル中 常に一定ダメージを受け続ける",
    image: {
      url: `${CPS_IMG_URL}/char/pg00_1240.png`
    }
  },
  {
    id: 14,
    name: "ニコラ テスラ",
    role: "スプリンター",
    type: "通常",
    a: 1.30,
    b: 0.50,
    h: 1.40,
    hs: "コイル2機で進入不可障壁を作る（2機目から起動）",
    ha: "長押し：ダッシュ",
    ab: "罠カード発動時間短縮+設置時間延長+クールダウン時間短縮",
    image: {
      url: `${CPS_IMG_URL}/char/gb00_1240.png`
    }
  },
  {
    id: 15,
    name: "初音 ミク",
    role: "スプリンター",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/mk00_1240.png`
    }
  },
  {
    id: 16,
    name: "ヴィオレッタ ノワール",
    role: "タンク",
    type: "通常",
    a: 0.95,
    b: 1.30,
    h: 1.25,
    hs: "味方周囲の敵を一時強制サイレント（ガード貫通）",
    ha: "長押し：周囲サイレント",
    ab: "周囲人数が多いほど防御力アップ（最大2.5倍/敵味方問わず）",
    image: {
      url: `${CPS_IMG_URL}/char/dv00_1240.png`
    }
  },
  {
    id: 17,
    name: "コクリコット ブランシュ",
    role: "スプリンター",
    type: "通常",
    a: 1.45,
    b: 1.45,
    h: 0.50,
    hs: "周囲の敵を一時 超弱体化 (攻撃+防御+移動ダウン)",
    ha: "長押し：ダッシュ",
    ab: "ダッシュアタックを当てた敵の 攻撃力を 一時 大ダウン",
    image: {
      url: `${CPS_IMG_URL}/char/ex00_1240.png`
    }
  },
  {
    id: 18,
    name: "リュウ",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/sr00_1240.png`
    }
  },
  {
    id: 19,
    name: "春麗",
    role: "スプリンター",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/sc00_1240.png`
    }
  },
  {
    id: 20,
    name: "マリア=S=レオンブルク",
    role: "アタッカー",
    type: "通常",
    a: 1.15,
    b: 1.45,
    h: 0.95,
    hs: "竜巻で 広範囲の敵を引き寄せ + 極大ダメージ",
    ha: "長押し：攻撃ヒットで引き寄せ",
    ab: "ヒーローアクション成功時 一時 攻撃力アップ",
    image: {
      url: `${CPS_IMG_URL}/char/sl00_1240.png`
    }
  },
  {
    id: 21,
    name: "アダム=ユーリエフ",
    role: "アタッカー",
    type: "通常",
    a: 1.35,
    b: 0.95,
    h: 1.00,
    hs: "前方遠距離の敵を凍結 + 凍結時被ダメージ超増加",
    ha: "長押し：氷剣タメ攻撃",
    ab: "水属性の 攻撃力アップ",
    image: {
      url: `${CPS_IMG_URL}/char/ig00_1240.png`
    }
  },
  {
    id: 22,
    name: "13（サーティーン）",
    role: "ガンナー",
    type: "通常",
    a: 1.30,
    b: 0.60,
    h: 0.90,
    hs: "攻撃モード変更+一時強化(攻撃+防御+移動)+回復",
    ha: "長押し：タメ攻撃",
    ab: "敵を倒す毎に体力回復（60%）",
    image: {
      url: `${CPS_IMG_URL}/char/tt00_1240.png`
    }
  },
  {
    id: 23,
    name: "かけだし勇者",
    role: "スプリンター",
    type: "通常",
    a: 1.00,
    b: 1.00,
    h: 1.00,
    hs: "味方全員にランダムなバフ効果",
    ha: "長押し：ダッシュ&ジャンプ",
    ab: "通常攻撃の最後に雷攻撃",
    image: {
      url: `${CPS_IMG_URL}/char/ky00_1240.png`
    }
  },
  {
    id: 24,
    name: "エミリア",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/re00_1240.png`
    }
  },
  {
    id: 25,
    name: "レム",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/rr00_1240.png`
    }
  },
  {
    id: 26,
    name: "カイ＝キスク",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/gk00_1240.png`
    }
  },
  {
    id: 27,
    name: "メグメグ",
    role: "ガンナー",
    type: "通常",
    a: 1.40,
    b: 0.75,
    h: 0.85,
    hs: "設置型ガトリングで 敵を自動攻撃（最大2機まで）",
    ha: "長押し：回転式機関銃攻撃",
    ab: "敵にダメージを与えると ヒーロースキルパワーが溜まる",
    image: {
      url: `${CPS_IMG_URL}/char/gg00_1240.png`
    }
  },
  {
    id: 28,
    name: "鏡音 リン",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/rn00_1240.png`
    }
  },
  {
    id: 29,
    name: "鏡音 レン",
    role: "タンク",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/ln00_1240.png`
    }
  },
  {
    id: 30,
    name: "イスタカ",
    role: "ガンナー",
    type: "通常",
    a: 1.15,
    b: 0.55,
    h: 1.15,
    hs: "前方にいる敵に 長距離大ダメージ狙撃",
    ha: "長押し：ターゲットロックオン",
    ab: "ロックオン敵への攻撃力アップ + 通常攻撃時イーグル追撃",
    image: {
      url: `${CPS_IMG_URL}/char/eg00_1240.png`
    }
  },
  {
    id: 31,
    name: "ザック & レイチェル",
    role: "スプリンター",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/si00_1240.png`
    }
  },
  {
    id: 32,
    name: "輝龍院 きらら",
    role: "スプリンター",
    type: "通常",
    a: 0.95,
    b: 0.65,
    h: 0.80,
    hs: "炎龍が自陣側から全拠点を巡り 敵に超ダメージ",
    ha: "長押し：ダッシュ",
    ab: "ダッシュ中 透明化（ターゲットにならない/敵マップ非表示）",
    image: {
      url: `${CPS_IMG_URL}/char/ng00_1240.png`
    }
  },
  {
    id: 33,
    name: "モノクマ",
    role: "タンク",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/dn00_1240.png`
    }
  },
  {
    id: 34,
    name: "ヴィーナス ポロロッチョ",
    role: "アタッカー",
    type: "通常",
    a: 1.35,
    b: 0.65,
    h: 0.90,
    hs: "周囲の敵に キラキラ連続ダメージ(ガード破壊)",
    ha: "長押し：ターゲット奇襲攻撃",
    ab: "最後にダメージを与えた敵をラブラブにターゲットする",
    image: {
      url: `${CPS_IMG_URL}/char/dq00_1240.png`
    }
  },
  {
    id: 35,
    name: "アクア",
    role: "スプリンター",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/ka00_1240.png`
    }
  },
  {
    id: 36,
    name: "めぐみん",
    role: "タンク",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/km00_1240.png`
    }
  },
  {
    id: 37,
    name: "ソーン=ユーリエフ",
    role: "ガンナー",
    type: "通常",
    a: 1.15,
    b: 1.45,
    h: 0.60,
    hs: "周囲に凍結エリア設置 + 凍結時被ダメージ超増加",
    ha: "長押し：氷剣タメ攻撃",
    ab: "アダムが近くにいるとヒーロースキルパワーが自動で溜まる",
    image: {
      url: `${CPS_IMG_URL}/char/ib00_1240.png`
    }
  },
  {
    id: 38,
    name: "リヴァイ",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/lv00_1240.png`
    }
  },
  {
    id: 39,
    name: "デビルミント鬼龍 デルミン",
    role: "アタッカー",
    type: "通常",
    a: 1.35,
    b: 1.40,
    h: 0.85,
    hs: "前方に 吹き飛ばしデルミンビーム攻撃",
    ha: "長押し：短距離高速移動",
    ab: "通常攻撃４発目にノックバック効果+ダメージ増幅",
    image: {
      url: `${CPS_IMG_URL}/char/dk00_1240.png`
    }
  },
  {
    id: 40,
    name: "トマス",
    role: "タンク",
    type: "通常",
    a: 1.40,
    b: 0.50,
    h: 1.50,
    hs: "トランクが一定時間暴れ回りダメージエリア発生",
    ha: "長押し：レンタルトランク",
    ab: "トランク憑依者の被ダメージ引き受け(ライフ50%以下で解除)",
    image: {
      url: `${CPS_IMG_URL}/char/tm00_1240.png`
    }
  },
  {
    id: 41,
    name: "猫宮 ひなた",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/nh00_1240.png`
    }
  },
  {
    id: 42,
    name: "岡部 倫太郎",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/or00_1240.png`
    }
  },
  {
    id: 43,
    name: "零夜",
    role: "スプリンター",
    type: "通常",
    a: 1.45,
    b: 1.40,
    h: 0.80,
    hs: "敵を自動追尾する\"自分\"を召喚（ダメージ+強制スタン）",
    ha: "長押し：ダッシュ",
    ab: "ダッシュ中にプラズマを身に纏う（触れるとスタン）",
    image: {
      url: `${CPS_IMG_URL}/char/la00_1240.png`
    }
  },
  {
    id: 44,
    name: "セイバーオルタ",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/fs00_1240_fate_AiYmgWdP.png`
    }
  },
  {
    id: 45,
    name: "ギルガメッシュ",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/fa00_1240_fate_AiYmgWdP.png`
    }
  },
  {
    id: 46,
    name: "ルルカ",
    role: "アタッカー",
    type: "通常",
    a: 1.35,
    b: 0.95,
    h: 1.00,
    hs: "前方円形エリアに多段ヒットドリーム☆ダメージ",
    ha: "長押し：杖殴打＆ガードブレイク",
    ab: "リリカがいなくなったとき一時ドリーム★パワーアップ",
    image: {
      url: `${CPS_IMG_URL}/char/lr00_1240.png`
    }
  },
  {
    id: 47,
    name: "ピエール 77世",
    role: "スプリンター",
    type: "通常",
    a: 0.50,
    b: 0.50,
    h: 1.50,
    hs: "爆食い巨大化（攻撃防御移動アップ+一部カード範囲拡張）",
    ha: "長押し：ダッシュ＆プッシュ",
    ab: "ダッシュ時間でダッシュアタックのダメージ増加（最大8倍）",
    image: {
      url: `${CPS_IMG_URL}/char/db00_1240.png`
    }
  },
  {
    id: 48,
    name: "佐藤四郎兵衛忠信",
    role: "タンク",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/sd00_1240.png`
    }
  },
  {
    id: 49,
    name: "アイズ・ヴァレンシュタイン",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/da00_1240_dnmc_R2mZdQJL.png`
    }
  },
  {
    id: 50,
    name: "狐ヶ咲 甘色",
    role: "アタッカー",
    type: "通常",
    a: 1.25,
    b: 0.75,
    h: 0.80,
    hs: "通常攻撃の間合い超絶拡張 (障害物無視+ガード貫通)",
    ha: "長押し：居合いカウンター",
    ab: "ヒーローアクション成功時 通常攻撃の間合い拡張",
    image: {
      url: `${CPS_IMG_URL}/char/fm00_1240_amai_P9XMyGL9.png`
    }
  },
  {
    id: 51,
    name: "ノクティス",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/fn00_1240_ff15_R2zX8rhM.png`
    }
  },
  {
    id: 52,
    name: "HM-WA100 ニーズヘッグ",
    role: "ガンナー",
    type: "通常",
    a: 1.45,
    b: 1.50,
    h: 0.90,
    hs: "背部ミサイルポッドから着弾地点指定ミサイル発射",
    ha: "長押し：HSゲージ消費荷電粒子砲",
    ab: "残り時間が少ないほどヒーロースキルパワー増加速度アップ",
    image: {
      url: `${CPS_IMG_URL}/char/mc00_1240_mcmc_Ax4FGuVT.png`
    }
  },
  {
    id: 53,
    name: "中島 敦",
    role: "スプリンター",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/bn00_1240_bngo_Pv8sjNKW.png`
    }
  },
  {
    id: 54,
    name: "芥川 龍之介",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/ba00_1240_bngo_Pv8sjNKW.png`
    }
  },
  {
    id: 55,
    name: "ゲームバズーカガール",
    role: "ガンナー",
    type: "通常",
    a: 1.35,
    b: 0.65,
    h: 0.95,
    hs: "前方と後方に 吹き飛ばしダメージ+ガードブレイク",
    ha: "長押し：チャージショット",
    ab: "カードスキルによる吹き飛ばし距離アップ",
    image: {
      url: `${CPS_IMG_URL}/char/bg00_1240_bazo_X4pRMvkJ.png`
    }
  },
  {
    id: 56,
    name: "ライザリン・シュタウト",
    role: "タンク",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/ar00_1240_ryza_Z3s86ekL.png`
    }
  },
  {
    id: 57,
    name: "青春 アリス",
    role: "タンク",
    type: "通常",
    a: 0.75,
    b: 0.60,
    h: 1.40,
    hs: "鏡の国を通り 前方にいる味方の位置へ 瞬間移動",
    ha: "長押し：プッシュ＆前方ダメージ減衰",
    ab: "不思議な力で 周囲にいる味方の攻撃力アップ",
    image: {
      url: `${CPS_IMG_URL}/char/aa00_1240_aohr_Bt95fY2S.png`
    }
  },
  {
    id: 58,
    name: "ジョーカー",
    role: "スプリンター",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/pj00_1240_prsn_Y2juVKsC.png`
    }
  },
  {
    id: 59,
    name: "イグニス=ウィル=ウィスプ",
    role: "アタッカー",
    type: "通常",
    a: 1.25,
    b: 0.90,
    h: 1.10,
    hs: "周囲に超ダメージ炎柱発生+煙が付いた敵に炎柱追尾攻撃",
    ha: "長押し：手錠を投擲し引き寄せ＆煙付与",
    ab: "煙が付いた敵に攻撃時 爆発追撃ダメージ",
    image: {
      url: `${CPS_IMG_URL}/char/iw00_1240_igns_Mn98hwvN.png`
    }
  },
  {
    id: 60,
    name: "アインズ・ウール・ゴウン",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/oa00_1240_over_B7cgitwE.png`
    }
  },
  {
    id: 61,
    name: "糸廻 輪廻",
    role: "ガンナー",
    type: "通常",
    a: 1.35,
    b: 0.70,
    h: 0.90,
    hs: "周囲に 手作りあみぐるみ機雷を設置（敵接触で爆発）",
    ha: "長押し：指定範囲に引き寄せ攻撃",
    ab: "罠カード遠隔設置+威力上昇+クールダウン短縮+発動「無」",
    image: {
      url: `${CPS_IMG_URL}/char/yk00_1240_rnne_E5iRgPeA.png`
    }
  },
  {
    id: 62,
    name: "キリト",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/sk00_1240_saoc_Bc2tDKyT.png`
    }
  },
  {
    id: 63,
    name: "アスナ",
    role: "スプリンター",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/sa00_1240_saoc_Bc2tDKyT.png`
    }
  },
  {
    id: 64,
    name: "Bugdoll",
    role: "ガンナー",
    type: "通常",
    a: 1.35,
    b: 1.45,
    h: 0.75,
    hs: "前方へウィングを並列展開し 超射程多段ビーム攻撃",
    ha: "長押し：ウィング射出+自分防御ダウン",
    ab: "#イレギュラーが近くにいると ヒーロースキルパワー増加",
    image: {
      url: `${CPS_IMG_URL}/char/bd00_1240_bgdl_CnrNny9F.png`
    }
  },
  {
    id: 65,
    name: "ステリア・ララ・シルワ",
    role: "アタッカー",
    type: "通常",
    a: 1.35,
    b: 1.40,
    h: 0.95,
    hs: "敵指定地点へジャンプ攻撃 (ガードブレイク＋サイレント)",
    ha: "長押し：可変式突進タメ攻撃",
    ab: "一部攻撃ヒット時 ルー君のパワーで敵をサイレント",
    image: {
      url: `${CPS_IMG_URL}/char/bm00_1240_stla_A5mK6vjP.png`
    }
  },
  {
    id: 66,
    name: "ラム",
    role: "スプリンター",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/ra00_1240_reze_Ps8MJN3D.png`
    }
  },
  {
    id: 67,
    name: "2B",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/tb00_1240_NieR_N4wvu78N.png`
    }
  },
  {
    id: 68,
    name: "ラヴィ・シュシュマルシュ",
    role: "タンク",
    type: "通常",
    a: 1.35,
    b: 0.50,
    h: 1.35,
    hs: "周囲敵を超引き寄せ＋最大ライフの10%までライフ吸収",
    ha: "長押し：周囲引き寄せ＋ライフ吸収",
    ab: "攻撃（近遠周連）カードにライフ吸収効果を追加",
    image: {
      url: `${CPS_IMG_URL}/char/ms00_1240_love_T6cZjd1V.png`
    }
  },
  {
    id: 69,
    name: "リムル=テンペスト",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/tr00_1240_sura_H5yNVX5W.png`
    }
  },
  {
    id: 70,
    name: "アル・ダハブ=アルカティア",
    role: "スプリンター",
    type: "通常",
    a: 1.05,
    b: 0.00,
    h: 1.10,
    hs: "前方へ突撃し  周囲に超猛毒攻撃(中心は効果量アップ)",
    ha: "長押し：ダッシュ＆ポイズン",
    ab: "敵にポイズンダメージを与える毎にライフ回復",
    image: {
      url: `${CPS_IMG_URL}/char/at00_1240_alda_P8wFye8M.png`
    }
  },
  {
    id: 71,
    name: "御坂 美琴",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/te00_1240_taru_N8zWPt5L.png`
    }
  },
  {
    id: 72,
    name: "アクセラレータ",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/ta00_1240_taru_N8zWPt5L.png`
    }
  },
  {
    id: 73,
    name: "天空王 ぶれいずどらごん",
    role: "ガンナー",
    type: "通常",
    a: 1.05,
    b: 0.70,
    h: 1.00,
    hs: "前方超遠距離へ貫通絶大ダメージのブレス＆大爆発",
    ha: "長押し：飛行ブレス攻撃+自分へダメージ",
    ab: "通常攻撃ヒット時 火炎エリアを生成(触れるとダメージ)",
    image: {
      url: `${CPS_IMG_URL}/char/bl00_1240_bure_R9gySF9M.png`
    }
  },
  {
    id: 74,
    name: "ベル・クラネル",
    role: "スプリンター",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/dc00_1240_dnmc_R2mZdQJL.png`
    }
  },
  {
    id: 75,
    name: "ロキシー・ミグルディア",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/mr00_1240_msyk_ak9Fvna6.png`
    }
  },
  {
    id: 76,
    name: "某<なにがし>",
    role: "スプリンター",
    type: "通常",
    a: 1.35,
    b: 0.55,
    h: 1.05,
    hs: "前方に 敵を暗闇状態にする連続インク攻撃（ガード貫通）",
    ha: "長押し：ダッシュ＆インク",
    ab: "自身が常に無属性 + 貫通攻撃カード クールダウン時間短縮",
    image: {
      url: `${CPS_IMG_URL}/char/nn00_1240_nngs_akf8BAjy.png`
    }
  },
  {
    id: 77,
    name: "ロックマン.EXE & 光熱斗",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/rm00_1240_roex_A3pnCY3A.png`
    }
  },
  {
    id: 78,
    name: "クー・シー",
    role: "アタッカー",
    type: "通常",
    a: 0.95,
    b: 1.50,
    h: 0.55,
    hs: "一時 ヒーローアクション威力＆防御絶大アップ+ ライフ回復",
    ha: "①ブレードニャーク ②ワープニャーク ③シールドニャーク",
    ab: "アピールでニャークが三段階モードチェンジ",
    image: {
      url: `${CPS_IMG_URL}/char/sf00_1240_c4c4_Z1aL6t1Z.png`
    }
  },
  {
    id: 79,
    name: "デンジ",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/cd00_1240_cnsm_Q4gHc2uD.png`
    }
  },
  {
    id: 80,
    name: "パワー",
    role: "スプリンター",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/cp00_1240_cnsm_Q4gHc2uD.png`
    }
  },
  {
    id: 81,
    name: "アミスター=バランディン",
    role: "タンク",
    type: "通常",
    a: 1.45,
    b: 1.40,
    h: 0.95,
    hs: "一時 ペガサス騎乗強化＆回復＆味方の移動速度アップ",
    ha: "長押し：ライフ回復＆前方ダメージ反射",
    ab: "周囲にいる味方のダメージ20%軽減（マリアのみ50%軽減）",
    image: {
      url: `${CPS_IMG_URL}/char/am00_1240_amst_J5gg5s5J.png`
    }
  },
  {
    id: 82,
    name: "シノン",
    role: "ガンナー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/ss00_1240_snon_wwo9dGkT.png`
    }
  },
  {
    id: 83,
    name: "ターニャ・デグレチャフ",
    role: "アタッカー",
    type: "コラボ",
    a: null,
    b: null,
    h: null,
    hs: "",
    ha: "",
    ab: "",
    image: {
      url: `${CPS_IMG_URL}/char/yt00_1240_yojo_fEK6hbca.png`
    }
  },
];

export const cards = [
  {
    name: "究極系ノーガード戦法",
    attribute: "火",
    rarity: "UR",
    skill: "ガード",
    type: "通常",
    url: ""
  },
  {
    name: "ぶじゅつかの超速加速",
    attribute: "木",
    rarity: "UR",
    skill: "強化",
    type: "通常",
    url: ""
  },
  {
    name: "楽団長 ドルケストル",
    attribute: "火",
    rarity: "UR",
    skill: "強化",
    type: "通常",
    url: ""
  },
  {
    name: "-蒼王宮-恩寵天使 ソーン=ユーリエフ",
    attribute: "水",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "対消滅ロングレンジライフル Hum-Buster",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "名門サッカー部 イナズマシュート",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "魂を司る聖天使 ガブリエル",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "妖炎参謀 月夜叉",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "UMEEEEEE!!! ㌍伝道 通信教育カラァーテェ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "機航師弾 フルーク・ツォイク",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "荒れ狂う天空王 ぶれいずどらごん",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "祭りの真打ち！打ち上げ花火",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "おかあさんだーいすき",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "戦略の灯/国防長官フレイ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "闘魂！注入！受け継がれし魂 ゲームバズーカ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "連合宇宙軍 強襲制圧型 装甲多脚戦車",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "祭りの目玉！ドラゴン花火",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "どこにでもいけるドア",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "極悪！最低！悪人派遣会社社長 ベリバッド",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "妖軍一統 ゲネラール",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "連合宇宙軍 シールドブレイカー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "恒星間転送装置 Tele-Pass",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "反導砲 カノーネ・ファイエル",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "おとうさん あそんであそんで一",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "ミナ＆ルナ＆レナのバーゲンセール戦争",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "ハイカラ盟友忍者 -壬生咲みみみ-",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "*絢爛ノ美*　ボラ＆アルヒコ＆アペイロン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "-蒼王宮- 聖歌連隊 ミローディア",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "【デルミン】 デビルミント始龍",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "合体攻撃！ドリーム★エンジェルズアロー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "UMEEEEEE!!! ㌍覇王 プニャトフスキー族",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "¦¦¦狐ヶ咲¦¦¦ 祓三姉妹 夢色 ¦ 桃色",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "戦陣の灯/ VDN-93 強襲揚陸艦 ユグドラシル",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "不思議の王子様「白馬の晴斗くん」",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "蜘蛛縫組 Ж 三代目組長 蜘蛛縫 正太郎",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "学園の王者 生徒会執行部",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "オールレンジアタック",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "迅雷の科学者 アバカン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "連合宇宙軍 サテライトキャノン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "全員集合！魔法少女リリカ☆ルルカ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "狂愛の次女 ヴァルヴァラ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "紅薔薇の暗殺術 クルエルダー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "チーちゃんのウワキオシオキ狙撃",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "創霊の加護 タイオワ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "*真実ノ美*　ジョバンニ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "【デルミン】 デビルミント鬼龍パパミン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "絶夢の魔女 リベレーション★ルルカ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "¦¦¦狸ヶ原¦¦¦ 破戒怨士 喰色",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "とある家庭用メカの反乱",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "運命の女神 エボリューション☆リリカ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "革命の旗",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "深淵より湧き上がるシャドウ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "ドリーム☆マジカルスクエア",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "全天首都防壁 Hum-Sphere LLIK",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "銀河防衛ロボ Unidoll-2525",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "祭りの粋！オトコの手筒花火",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "モノリス Hum-Unknown",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "神技官 アンジュ・ソレイユ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "独災者 アングリフ・ギフト",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "忘愛の長女 アレクサンドラ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "楽団姫 ディーバ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "紅薔薇の副団長 アミスター",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "-蒼王宮-氷冠女王イデア＝N=ユランブルク",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "ガルガルのピカピカデコ戦車",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "雷霊の加護 ワキンヤン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "ライバル狂刃忍者 -幽々院ゆらら-",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "-蒼王宮- 終焉禁獣 グラナート",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "背に負いし亡き妻の加護",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "#夜光犯罪特区 #きてるちゃんライヴ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "#夜光犯罪特区 #終夜の俺様賛美会",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "不思議の支配者「ハートの女王さま」",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "蜘蛛縫組 Ж 面従相談役 千切 常影",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "エナジー缶 100000ml",
    attribute: "水",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: ""
  },
  {
    name: "ギアメーカー",
    attribute: "木",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【我羨惚(がせんこつ)】紗夢(じゃむ)",
    attribute: "火",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【アイアンメイデン】ミリア",
    attribute: "水",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【アイウォントアウト】ジャック・オー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【アニモエスティンギ】ラムレザル",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【マグナムウェディング】エルフェルト",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ライディーン】シン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ライジング・フォース】カイ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【祝福する歌姫】初音 ミク",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【号令する歌姫】初音 ミク",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【空駆ける歌姫】初音 ミク",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【最終最凶】ベガ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【拳を極めし者】豪鬼",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【魂屠る闇】ネカリ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ラッシュ＆ブレイズ】ケン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【リゼロ】間断なき結束",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【リゼロ】ひとときの団欒",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【リゼロ】絶望という病",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【リゼロ】ゼロから始まる異世界生活",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【口寄せ・大型神陣】アンサー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【画竜点睛】梅喧(ばいけん)",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【夢超える共演】初音ミク&鏡音リンレン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【熱狂する双演】鏡音リン&鏡音レン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【イカれた約束】ザック＆レイ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ルナティック・アイズ】レイチェル",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【愉悦の一閃】アイザック",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【超高校級のゲーマー】七海 千秋",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【超高校級の幸運】狛枝 凪斗",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【超高校級の希望】苗木 誠",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: `${CPS_IMG_URL}/card/ui_game_deck_card_0400_005.png`
  },
  {
    name: "【風呂上がりの休息】アクア＆めぐみん",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: `${CPS_IMG_URL}/card/ui_game_deck_card_0410_008.png`
  },
  {
    name: "【駄女神’s】アクア＆めぐみん＆ダクネス",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: `${CPS_IMG_URL}/card/ui_game_deck_card_0410_007.png`
  },
  {
    name: "【慈愛の貧乏リッチー】ウィズ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: `${CPS_IMG_URL}/card/ui_game_deck_card_0410_006.png`
  },
  {
    name: "【爆裂アークウィザード】めぐみん",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: `${CPS_IMG_URL}/card/ui_game_deck_card_0410_005.png`
  },
  {
    name: "【進撃の巨人】 娘々ストレッチ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【進撃の巨人】 超大型巨人襲来",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【進撃の巨人】 小さな刃",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【火遊びフラッシュバン】猫宮ひなた",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ワンショットワンキル】猫宮ひなた",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【最高にハイ!!!エナドリ】猫宮ひなた",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【STEINS；GATE】時間跳躍の協力者",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【STEINS；GATE】未来を司る女神作戦",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【STEINS；GATE】黄昏の憩い",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【Fate/stay night [HF]】激辛麻婆豆腐",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【Fate/stay night [HF]】狂戦士の咆哮",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【Fate/stay night [HF]】lost butterfly",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【Fate/stay night [HF]】舞い散る桜",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【超歌舞伎】今昔饗宴千本桜",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【超歌舞伎】転生なしたる白狐",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【千本桜】初音未來",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ダンまち】至福の一時",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ダンまち】ソード・オラトリア",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ダンまち】眷族の物語(ファミリア・ミィス)",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【FFXV】父子の絆",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【FFXV】彼の者の物語",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【FFXV】輝かしき未来へ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【文スト】双つの黒",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【文スト】理想という病を愛す",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【文スト】ありふれた日常の幸せ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【文スト】武装探偵社",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ライザのアトリエ2】ひと夏の思い出",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ライザのアトリエ2】夏だ！海だ！水着だ！",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ライザのアトリエ2】いざ！冒険の旅へ！",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ペルソナ5】心の怪盗団",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ペルソナ5】運命の囚われ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ペルソナ5】TAKE YOUR HEART",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【オーバーロード】英雄モモン＆美姫ナーベ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【オーバーロード】守護者統括 アルベド",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【オーバーロード】不死者の王 アインズ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【SAO】旅路の果て",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【SAO】妖精たちの国にて",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【SAO】氷の狙撃手",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【SAO】朝露の少女と",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【NieR:Automata】交錯する運命",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【NieR:Automata】静寂の時",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【NieR:Automata】戦いの始まり",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【転スラ】受け継がれる想い",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【転スラ】集う者達",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【転スラ】転生したらスライムだった件",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【超電磁砲】幻想殺し（イマジンブレイカー）",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【超電磁砲】とある少女たちの物語",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【超電磁砲】超能力者（レベル5）の第一位",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【超電磁砲】常盤台の超電磁砲（レールガン）",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ダンまち】恥じらいの疾風",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ダンまち】聖火の女神と宴",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【無職転生】無慈悲なる邂逅",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【無職転生】すれ違う物語",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【無職転生】夕暮れのひと時",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ロックマンエグゼ】アースブレイカー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ロックマンエグゼ】ダブルストリーム",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【ロックマンエグゼ】ショックウェーブ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【チェンソーマン】犬とチェンソー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【チェンソーマン】公安対魔特異4課",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【チェンソーマン】早川アキ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【チェンソーマン】マキマ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "コラボ",
    url: ""
  },
  {
    name: "【幼女戦記】神の恩寵",
    attribute: "火",
    rarity: "UR",
    skill: "強化",
    type: "コラボ",
    url: ""
  },
  {
    name: "【幼女戦記】反撃の狼煙",
    attribute: "木",
    rarity: "UR",
    skill: "その他",
    type: "コラボ",
    url: ""
  },
  {
    name: "【幼女戦記】ラインの悪魔",
    attribute: "水",
    rarity: "UR",
    skill: "近距離",
    type: "コラボ",
    url: "",
  }
];

export const allcards = [
  {
    name: "はらぺこゴースト",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0040_001.png",
  },
  {
    name: "はらぺこ吸血バット",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0040_002.png",
  },
  {
    name: "はらぺこメイジ",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0040_003.png",
  },
  {
    name: "究極系ノーガード戦法",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0040_004.png",
  },
  {
    name: "ゲームバズーカ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0040_005.png",
  },
  {
    name: "一撃必殺 ブラストアッパー",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0040_006.png",
  },
  {
    name: "オールレンジアタック",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0040_007.png",
  },
  {
    name: "とある家庭用メカの反乱",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0040_008.png",
  },
  {
    name: "連合宇宙軍 スタンビームライフル",
    attribute: "",
    rarity: "N",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0050_001.png",
  },
  {
    name: "連合宇宙軍 ステルス迷彩",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0050_002.png",
  },
  {
    name: "連合宇宙軍 ジャスティスハンマー",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0050_003.png",
  },
  {
    name: "連合宇宙軍 フルアーマー機動兵",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0050_004.png",
  },
  {
    name: "連合宇宙軍 広域電磁波ジャマー",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0050_005.png",
  },
  {
    name: "連合宇宙軍 強襲制圧型 装甲多脚戦車",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0050_006.png",
  },
  {
    name: "連合宇宙軍 シールドブレイカー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0050_007.png",
  },
  {
    name: "連合宇宙軍 サテライトキャノン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0050_008.png",
  },
  {
    name: "ドリーム☆ステッキ",
    attribute: "",
    rarity: "N",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0060_001.png",
  },
  {
    name: "ドリーム☆アンブレラ",
    attribute: "",
    rarity: "N",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0060_002.png",
  },
  {
    name: "ドリーム☆ミーティア",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0060_003.png",
  },
  {
    name: "魔法少女☆ルルカ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0060_004.png",
  },
  {
    name: "魔法少女☆ララカ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0060_005.png",
  },
  {
    name: "運命の女神 エボリューション☆リリカ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0060_006.png",
  },
  {
    name: "ドリーム☆マジカルスクエア",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0060_007.png",
  },
  {
    name: "全員集合！魔法少女リリカ☆ルルカ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0060_008.png",
  },
  {
    name: "血塗れチェーンソウ",
    attribute: "",
    rarity: "N",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0070_001.png",
  },
  {
    name: "保健室の救急セット",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0070_002.png",
  },
  {
    name: "剣道部エースの五月雨突き",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0070_003.png",
  },
  {
    name: "化学部の放課後ジッケンタイム",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0070_004.png",
  },
  {
    name: "呪詛包帯",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0070_005.png",
  },
  {
    name: "学園の王者 生徒会執行部",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0070_007.png",
  },
  {
    name: "深淵より湧き上がるシャドウ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "https://cps-down.hangame.co.jp/web/img/card/ui_game_deck_card_0070_008.png",
  },
  {
    name: "雨霊の加護 ウィネバ",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "操宴軍馬 ベディーネン・パンツァー",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "楽団員 サンバール",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "激旨！到着！戦場食堂車 バトルダイナー",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "ぶじゅつかの超速加速",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "楽団長 ドルケストル",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "初級魔法 ふれいむ",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "初級魔法 ぶりざーど",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "銀行強盗 デリンジャー",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "不思議の一休み「トランプちゃん」",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "焼却ロボ Fladoll-4649",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "ひめたる力の覚醒",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "聖女の守り手 黒猫リリィ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "楽団員 アルプ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "-蒼王宮- 白翼騎士 ジェニト",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "樹霊の加護 イシュティニケ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "対消滅ロングレンジライフル Hum-Buster",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "魂を司る聖天使 ガブリエル",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "聖女の親友 修道女マリー",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "たんじょうび ぷれぜんと",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "紅薔薇の聖王剣 セルピエンテ",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "アイちゃんのオススメ防弾パーカー",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "*支配ノ美*　エレンホス",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "#夜光犯罪特区 #天馬エイワズ",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "エナジー缶 1000ml",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "聖槍ろんぎぬす",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "おにいちゃん ぎゅーってして",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "ドスブラック★シスコンブラザー",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "戦禍の灯/ フレイヤ -哀傷のドッグタグ-",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "機航師弾 フルーク・ツォイク",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "荒れ狂う天空王 ぶれいずどらごん",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "祭りの真打ち！打ち上げ花火",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "おかあさん だーいすき",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "きょうせんしの大剣",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "爆弾魔 バルカン",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "爆術死鬼 ツクモ",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "祭りの終わり！満天提灯",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "崩愛の爆弾 ジ・エラー",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "レーザー特注忍具 -双天小烏丸-",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "戦士の灯/ 超圧縮荷電粒子砲 ラグナロク",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "蜘蛛縫組 Ж 愛してマスコット ウサ太郎",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "切り裂き魔 ジャック",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "祭り行列！山車燈籠",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "あこがれのアイドルからの声援",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "情愛の四女 クララ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "紅薔薇の不壊盾 イノセンテ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "デジタル堅牢忍具 -不可視金蔵-",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "*振付ノ美*　オルケーシス",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "-蒼王宮- 黒滅導師 アカンティラド",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "【デルミン】エンジェリック.A.破虎",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "UMEEEEEE!!! ㌍倍増 ピッツァハーレム",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "祭りの目玉！ドラゴン花火",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "死献薬 シュタルク・トート",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "¦¦¦狐ヶ咲¦¦¦ 黒漆祓拵 為次",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "放火魔 スコーピオン",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "電撃ロボ Eledoll-115",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "聖女の前衛 ジル・ド・レ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "聖女の後衛 銃士レオン",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "地獄の番犬 ケルベロス",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "帝皇機神 ケーニヒ・イェーガー",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "ゼルっちの横流しフルオートライフル",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "オンエア部下忍者 -アニマルチューバーズ-",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "*伝説ノ美*　プロティバラリナ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "【デルミン】デビルミント島",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "#夜光犯罪特区 #やめるちゃんアゲ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "UMEEEEEE!!! ㌍満載 ピッツァフルコース",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "¦¦¦狸ヶ原¦¦¦ 偽紫 刀一郎",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "熱血！猛進！配給支援部隊 Mr.ランチャー",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "エナジー缶 4000ml",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "妖軍一統 ゲネラール",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "恒星間転送装置 Tele-Pass",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "反導砲 カノーネ・ファイエル",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "おとうさん あそんであそんでー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "ミナ&ルナ&レナのバーゲンセール戦争",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "ハイカラ盟友忍者 -壬生咲みみみ-",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "*絢爛ノ美*　ボラ＆アルヒコ＆アペイロン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "-蒼王宮- 聖歌連隊 ミローディア",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "【デルミン】デビルミント始龍",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "合体攻撃！ドリーム☆エンジェルズアロー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "UMEEEEEE!!! ㌍覇王 プニャトフスキ一族",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "¦¦¦狐ヶ咲¦¦¦ 祓三姉妹 夢色 ¦ 桃色",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "戦陣の灯/ VDN-93 強襲揚陸艦 ユグドラシル",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "千血妖刀 牛鬼村正",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "祭りの思い出！おじいちゃんの祝砲",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "【デルミン】オニギリクママン",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "看守長 キャバルリー",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "全翼飛将 グライフ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "祭りの華！だんじりガール",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "拷問館 パウ・ライヒェ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "奏愛の三女 エレオノーラ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "紅薔薇の生命線 パレンティア",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "-蒼王宮- 翠光騎士 リョーフキー",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "-蒼王宮- 監獄騎士 ヴィーセリツァ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "#夜光犯罪特区 #メビウス目撃情報",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "魔法少女 レレカ☆ロロカ",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "¦¦¦狐ヶ咲¦¦¦ 四典老師 虹色",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "戦慄の灯/ AGBW-3990N ヘイムダル",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "不思議の籠球部「白秋晴斗くん」",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "蜘蛛縫組 Ж 舎弟衆 万亀川/蛇ノ目/虎山",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "迅雷の科学者 アバカン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "狂愛の次女 ヴァルヴァラ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "紅薔薇の暗殺術 クルエルダー",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "チーちゃんのウワキオシオキ狙撃",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "創霊の加護 タイオワ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "*真実ノ美*　ジョバンニ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "【デルミン】デビルミント鬼龍パパミン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "反政府勢力クラッキング Case-171",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "かぞく みんなで おしゃしん",
    attribute: "",
    rarity: "R",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "祭り開始！どでかい和太鼓",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "不思議の美術部「玄冬淡雪＆朱夏夜雨ちゃん」",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "蜘蛛縫組 Ж 組本部 裁縫会合室",
    attribute: "",
    rarity: "SR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "革命の旗",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "全天首都防壁 Hum-Sphere LLIK",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "銀河防衛ロボ Unidoll-2525",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "祭りの粋！オトコの手筒花火",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "モノリス Hum-Unknown",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "神技官 アンジュ・ソレイユ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "独災者 アングリフ・ギフト",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "忘愛の長女 アレクサンドラ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "楽団姫 ディーバ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "紅薔薇の副団長 アミスター",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "-蒼王宮-氷冠女王イデア=N=ユランブルク",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "ガルガルのピカピカデコ戦車",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "雷霊の加護 ワキンヤン",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "ライバル狂刃忍者 -幽々院ゆらら-",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "-蒼王宮- 終焉禁獣 グラナート",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "背に負いし亡き妻の加護",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "#夜光犯罪特区 #きてるちゃんライヴ",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "#夜光犯罪特区 #終夜の俺様賛美会",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
  {
    name: "不思議の支配者「ハートの女王さま」",
    attribute: "",
    rarity: "UR",
    skill: "",
    type: "通常",
    url: "",
  },
];

export const medals = [
  {
    id: 1,
    name: "攻撃力アップ",
    effect: [0.01, 0.02, 0.03],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon001.png`
    }
  },
  {
    id: 2,
    name: "防御力アップ",
    effect: [0.01, 0.02, 0.03],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon002.png`
    }
  },
  {
    id: 3,
    name: "体力アップ",
    effect: [0.01, 0.02, 0.03],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon003.png`
    }
  },
  {
    id: 4,
    name: "移動速度アップ",
    effect: [0.01, 0.02, 0.03],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon004.png`
    }
  },
  {
    id: 5,
    name: "クールタイム短縮",
    effect: [-0.02, -0.03, -0.04],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon005.png`
    }
  },
  {
    id: 6,
    name: "ヒーロースキルゲージ増加量アップ",
    effect: [0.02, 0.03, 0.04],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon006.png`
    }
  },
  {
    id: 7,
    name: "拠点確保速度アップ",
    effect: [0.02, 0.04, 0.06],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon007.png`
    }
  },
  {
    id: 8,
    name: "火属性耐性アップ",
    effect: [-0.03, -0.05, -0.07],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon008.png`
    }
  },
  {
    id: 9,
    name: "水属性耐性アップ",
    effect: [-0.03, -0.05, -0.07],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon009.png`
    }
  },
  {
    id: 10,
    name: "木属性耐性アップ",
    effect: [-0.03, -0.05, -0.07],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon010.png`
    }
  },
  {
    id: 11,
    name: "スタン耐性アップ",
    effect: [-0.02, -0.05, -0.08],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon011.png`
    }
  },
  {
    id: 12,
    name: "サイレント耐性アップ",
    effect: [-0.04, -0.08, -0.12],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon012.png`
    }
  },
  {
    id: 13,
    name: "ポイズン耐性アップ",
    effect: [-0.04, -0.08, -0.12],
    image: {
      url: `${CPS_IMG_URL}/medals/MedalIcon013.png`
    }
  }
];

export const icons = [
  {
    name: "performance_01",
    iconType: "performance",
    image: {
      url: `${CPS_IMG_URL}/icons/performance_01.png`
    }
  },
  {
    name: "performance_02",
    iconType: "performance",
    image: {
      url: `${CPS_IMG_URL}/icons/performance_02.png`
    }
  },
  {
    name: "performance_03",
    iconType: "performance",
    image: {
      url: `${CPS_IMG_URL}/icons/performance_03.png`
    }
  },
  {
    name: "graph01",
    iconType: "graph",
    image: {
      url: "https://s.nhn-playart.com/smartgame/spn/games/compass/official/img/hero/ttl_graph01.svg"
    }
  },
  {
    name: "graph02",
    iconType: "graph",
    image: {
      url: "https://s.nhn-playart.com/smartgame/spn/games/compass/official/img/hero/ttl_graph02.svg"
    }
  },
  {
    name: "graph03",
    iconType: "graph",
    image: {
      url: "https://s.nhn-playart.com/smartgame/spn/games/compass/official/img/hero/ttl_graph03.svg"
    }
  },
  {
    name: "ui_menu_datacard00",
    iconType: "ui_menu_data",
    image: {
      url: `${CPS_IMG_URL}/icons/ui_menu_datacard00.png`
    }
  },
  {
    name: "ui_menu_datacard01",
    iconType: "ui_menu_data",
    image: {
      url: `${CPS_IMG_URL}/icons/ui_menu_datacard01.png`
    }
  },
  {
    name: "ui_menu_datacard02",
    iconType: "ui_menu_data",
    image: {
      url: `${CPS_IMG_URL}/icons/ui_menu_datacard02.png`
    }
  },
  {
    name: "ui_menu_datacard03",
    iconType: "ui_menu_data",
    image: {
      url: `${CPS_IMG_URL}/icons/ui_menu_datacard03.png`
    }
  },
  {
    name: "ui_menu_datacard04",
    iconType: "ui_menu_data",
    image: {
      url: `${CPS_IMG_URL}/icons/ui_menu_datacard04.png`
    }
  },
  {
    name: "ui_menu_datacard05",
    iconType: "ui_menu_data",
    image: {
      url: `${CPS_IMG_URL}/icons/ui_menu_datacard05.png`
    }
  },
  {
    name: "ui_menu_datacard06",
    iconType: "ui_menu_data",
    image: {
      url: `${CPS_IMG_URL}/icons/ui_menu_datacard06.png`
    }
  },
  {
    name: "ui_menu_datacard07",
    iconType: "ui_menu_data",
    image: {
      url: `${CPS_IMG_URL}/icons/ui_menu_datacard07.png`
    }
  },
  {
    name: "ui_reward_type_0270_tckt_A3pnCY3A",
    image: {
      url: `${CPS_IMG_URL}/icons/ui_reward_type_0270_tckt_A3pnCY3A.png`
    }
  },
  {
    name: "ui_reward_type_0280_tckt_A3pnCY3A",
    image: {
      url: `${CPS_IMG_URL}/icons/ui_reward_type_0280_tckt_A3pnCY3A.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_reward_type_0150.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_reward_type_0160.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon589.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon590.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon591.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon592.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon593.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon636_pass_U7h5uPfB.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon626_lcan_Je7V1WgX.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon627_lcan_Je7V1WgX.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon628_lcan_Je7V1WgX.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon629_lcan_Je7V1WgX.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon633_pass_U7h5uPfB.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon634_pass_U7h5uPfB.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon635_pass_U7h5uPfB.png`
    }
  },
  {
    image: {
      url: `${CPS_IMG_URL}/icons/ui_pro_icon636_pass_U7h5uPfB.png`
    }
  }
];