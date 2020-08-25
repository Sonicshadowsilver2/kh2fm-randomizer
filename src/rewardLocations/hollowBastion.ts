import { LocationName } from "../LocationName";
import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";
import {
	LocationDependency,
	RewardLocation,
	RewardLocationType,
} from "./RewardLocation";

const exclude: Reward[] = [
	Rewards.PROOF_OF_PEACE,
	...Object.values(formRewards),
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGES,
];

const dependencies: LocationDependency[] = [
	{
		candidate: Rewards.PROOF_OF_CONNECTION,
		conflict: [Rewards.PROOF_OF_PEACE],
		locations: [
			{
				name: "Proof of Connection",
				address: "11CE0B16",
			},
			{
				name: "Manifest Illusion (Lingering Will)",
				address: "11CE0B22",
			},
		],
	},
];

export const hollowBastionRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Borough",
		value: "11CDFF3A",
		reward: Rewards.DRIVE_RECOVERY,
		gameMode: {
			[GameMode.GOA_MOD]: {
				exclude: [Rewards.TORN_PAGES],
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Borough",
		value: "11CDFF46",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: {
				exclude: [Rewards.TORN_PAGES],
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Borough",
		value: "11CDFF52",
		reward: Rewards.HI_POTION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				exclude: [Rewards.TORN_PAGES],
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Borough",
		value: "11CDFF5E",
		reward: Rewards.MYTHRIL_SHARD,
		gameMode: {
			[GameMode.GOA_MOD]: {
				exclude: [Rewards.TORN_PAGES],
			},
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Borough",
		value: "11CDFF6A",
		reward: Rewards.DARK_SHARD,
		gameMode: {
			[GameMode.GOA_MOD]: {
				exclude: [Rewards.TORN_PAGES],
			},
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Postern",
		value: "11CDFF76",
		reward: Rewards.CASTLE_PERIMETER_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Postern",
		value: "11CDFF82",
		reward: Rewards.MYTHRIL_GEM,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Postern",
		value: "11CDFF8E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Corridors",
		value: "11CDFF9A",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Corridors",
		value: "11CDFFA6",
		reward: Rewards.MYTHRIL_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Corridors",
		value: "11CDFFB2",
		reward: Rewards.DARK_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Corridors",
		value: "11CDFFBE",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Ansem's Study",
		value: "11CDFFCA",
		reward: Rewards.SKILL_RECIPE,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Ansem's Study",
		value: "11CDFFD6",
		reward: Rewards.UKELELE_CHARM,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Restoration Site",
		value: "11CDFFE2",
		reward: Rewards.MOON_RECIPE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Restoration Site",
		value: "11CDFFEE",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Crystal Fissure",
		value: "11CDFFFA",
		reward: Rewards.TORN_PAGES,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Crystal Fissure",
		value: "11CE0006",
		reward: Rewards.THE_GREAT_MAW_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Crystal Fissure",
		value: "11CE0012",
		reward: Rewards.ENERGY_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Crystal Fissure",
		value: "11CE001E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Postern",
		value: "11CE002A",
		reward: Rewards.GULL_WING,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.HOLLOW_BASTION,
		description: "Heartless Manufactory",
		value: "11CE0036",
		reward: Rewards.COSMIC_CHAIN,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.HOLLOW_BASTION,
		description: "Bailey Nobodies",
		value: "21D10E98",
		reward: Rewards.FIRE,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.HOLLOW_BASTION,
		description: "Demyx (Hollow Bastion)",
		value: "21D10BA8",
		reward: Rewards.BLIZZARD,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.HOLLOW_BASTION,
		description: "1000 Heartless",
		value: "21D11068",
		reward: Rewards.GUARD_BREAK,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Marketplace Map",
		value: "11CE068A",
		reward: Rewards.MARKETPLACE_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Membership Card",
		value: "11CE0696",
		reward: Rewards.MEMBERSHIP_CARD,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Blizzard",
		value: "11CE06A2",
		reward: Rewards.BLIZZARD,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Baseball Charm",
		value: "11CE0702",
		reward: Rewards.BASEBALL_CHARM,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Master Form",
		value: "11CE080A",
		reward: Rewards.MASTER_FORM,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Cure",
		value: "11CE0822",
		reward: Rewards.CURE,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Ice Cream",
		value: "11CE082E",
		reward: Rewards.ICE_CREAM,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Picture",
		value: "11CE083A",
		reward: Rewards.PICTURE,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Sleeping Lion",
		value: "11CE0936",
		reward: Rewards.SLEEPING_LION,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Fenrir",
		value: "11CE0942",
		reward: Rewards.FENRIR,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Secret Ansem's Report 1 (1,000 Heartless)",
		value: "11CE09A2",
		reward: Rewards.REPORT_ONE,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Secret Ansem's Report 7 (Bailey Nobodies)",
		value: "11CE09EA",
		reward: Rewards.REPORT_SEVEN,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Proof of Peace",
		value: "11CE0B3A",
		reward: Rewards.PROOF_OF_PEACE,
		gameMode: {
			[GameMode.GOA_MOD]: {
				exclude,
				dependencies,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.HOLLOW_BASTION,
		description: "Winner's Proof",
		value: "11CE0B2E",
		reward: Rewards.WINNERS_PROOF,
		gameMode: {
			[GameMode.GOA_MOD]: {
				exclude,
				dependencies,
			},
		},
	},
];
