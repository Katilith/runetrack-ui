export enum Skills {
    ATTACK = 0,
    DEFENCE = 1,
    STRENGTH = 2,
    CONSTITUTION = 3,
    RANGED = 4,
    PRAYER = 5,
    MAGIC = 6,
    COOKING = 7,
    WOODCUTTING = 8,
    FLETCHING = 9,
    FISHING = 10,
    FIREMAKING = 11,
    CRAFTING = 12,
    SMITHING = 13,
    MINING = 14,
    HERBLORE = 15,
    AGILITY = 16,
    THIEVING = 17,
    SLAYER = 18,
    FARMING = 19,
    RUNECRAFTING = 20,
    HUNTER = 21,
    CONSTRUCTION = 22,
    SUMMONING = 23,
    DUNGEONEERING = 24,
    DIVINATION = 25,
    INVENTION = 26
}

export const skillNames: string[] = [
    'Attack', 'Defence', 'Strength', 'Constitution', 'Ranged', 'Prayer', 'Magic', 'Cooking',
    'Woodcutting', 'Fletching', 'Fishing', 'Firemaking', 'Crafting', 'Smithing', 'Mining',
    'Herblore', 'Agility', 'Thieving', 'Slayer', 'Farming', 'Runecrafting', 'Hunter',
    'Construction', 'Summoning', 'Dungeoneering', 'Divination', 'Invention'
];

export const skillNamesLower: string[] = skillNames.map(skillName => skillName.toLowerCase());

export const skillOrder: number[] = [
    Skills.ATTACK, Skills.CONSTITUTION, Skills.MINING,
    Skills.STRENGTH, Skills.AGILITY, Skills.SMITHING,
    Skills.DEFENCE, Skills.HERBLORE, Skills.FISHING,
    Skills.RANGED, Skills.THIEVING, Skills.COOKING,
    Skills.PRAYER, Skills.CRAFTING, Skills.FIREMAKING,
    Skills.MAGIC, Skills.FLETCHING, Skills.WOODCUTTING,
    Skills.RUNECRAFTING, Skills.SLAYER, Skills.FARMING,
    Skills.CONSTRUCTION, Skills.HUNTER, Skills.SUMMONING,
    Skills.DUNGEONEERING, Skills.DIVINATION, Skills.INVENTION
];

export const ELITE_XP_TABLE = [
    0,
    830,
    1861,
    2902,
    3980,
    5126,
    6390,
    7787,
    9400,
    11275,
    13605,
    16372,
    19656,
    23546,
    28138,
    33520,
    39809,
    47109,
    55535,
    64802,
    77190,
    90811,
    106221,
    123573,
    143025,
    164742,
    188893,
    215651,
    245196,
    277713,
    316311,
    358547,
    404634,
    454796,
    509259,
    568254,
    632019,
    700797,
    774834,
    854383,
    946227,
    1044569,
    1149696,
    1261903,
    1381488,
    1508756,
    1644015,
    1787581,
    1939773,
    2100917,
    2283490,
    2476369,
    2679907,
    2894505,
    3120508,
    3358307,
    3608290,
    3870846,
    4146374,
    4435275,
    4758122,
    5096111,
    5449685,
    5819299,
    6205407,
    6608473,
    7028964,
    7467354,
    7924122,
    8399751,
    8925664,
    9472665,
    10041285,
    10632061,
    11245538,
    11882262,
    12542789,
    13227679,
    13937496,
    14672812,
    15478994,
    16313404,
    17176661,
    18069395,
    18992239,
    19945833,
    20930821,
    21947856,
    22997593,
    24080695,
    25259906,
    26475754,
    27728955,
    29020233,
    30350318,
    31719944,
    33129852,
    34580790,
    36073511,
    37608773,
    39270442,
    40978509,
    42733789,
    44537107,
    46389292,
    48291180,
    50243611,
    52247435,
    54303504,
    56412678,
    58575823,
    60793812,
    63067521,
    65397835,
    67785643,
    70231841,
    72737330,
    75303019,
    77929820,
    80618654,
    83370445,
    86186124,
    89066630,
    92012904,
    95025896,
    98106559,
    101255855,
    104474750,
    107764216,
    111125230,
    114558777,
    118065845,
    121647430,
    125304532,
    129038159,
    132849323,
    136739041,
    140708338,
    144758242,
    148889790,
    153104021,
    157401983,
    161784728,
    166253312,
    170808801,
    175452262,
    180184770,
    185007406,
    189921255,
    194927409
];

export function getXpRequiredForLevel(level: number, elite: boolean = false): number {
    if(level < 1) {
        return 0;
    }

    if(elite) {
        if(level > 150) {
            return 0;
        }

        return ELITE_XP_TABLE[ level - 1 ];
    } else {
        if(level > 120) {
            return 0;
        }

        let a = 0;

        for(let i = 1; i < level; i++) {
            a += Math.floor(i + 300 * Math.pow(2, i / 7));
        }

        return Math.floor(a / 4);
    }
}

export function getLevelForXp(xp: number, elite: boolean = false): number {
    if(xp <= 0) {
        return 0;
    }

    if(elite) {
        for(let level = 1; level <= 150; level++) {
            const expForLevel = ELITE_XP_TABLE[ level - 1 ];

            if(xp < expForLevel) {
                return level - 1;
            }
        }

        return 1;
    } else {
        let a = 0;
        let level = 1;

        for(let i = 1; i <= 120; i++) {
            level = i;
            a += Math.floor(i + 300 * Math.pow(2, i / 7));

            if(xp < Math.floor(a / 4)) {
                break;
            }
        }

        return level;
    }
}
