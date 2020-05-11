import { Reward } from "./Reward";
import { RewardType } from "./RewardType";

export const proofRewards: { [name: string]: Reward } = {
	PROOF_OF_CONNECTION: {
		type: RewardType.PROOF,
		name: "Proof of Connection",
		value: "0251",
	},
	PROOF_OF_NONEXISTENCE: {
		type: RewardType.ITEM,
		name: "Proof of Nonexistence",
		value: "0252",
	},
	PROOF_OF_PEACE: {
		type: RewardType.ITEM,
		name: "Proof of Peace",
		value: "0253",
	},
};