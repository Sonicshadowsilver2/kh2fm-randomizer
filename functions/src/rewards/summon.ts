import { Reward } from "./Reward";
import { RewardType } from "./RewardType";

export const summonRewards: { [name: string]: Reward } = {
	BASEBALL_CHARM: {
		type: RewardType.SUMMON,
		name: "Baseball Charm",
		value: "017F",
	},
	UKELELE_CHARM: {
		type: RewardType.SUMMON,
		name: "Ukulele Charm",
		value: "0019",
	},
	LAMP_CHARM: {
		type: RewardType.SUMMON,
		name: "Lamp Charm",
		value: "009F",
	},
	FEATHER_CHARM: {
		type: RewardType.SUMMON,
		name: "Feather Charm",
		value: "00A0",
	},
};