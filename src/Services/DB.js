// initialize all objects? stick them in a store

// forge cards: metal ,lumber, etc

// special cards: sowrd, spear, etc
import ForgeCard from './ForgeCard'
import SpecialCard from './SpecialCard'

import MetalIcon from '../assets/cards/Metal.png'
import CottonIcon from '../assets/cards/Cotton.png'
import BlackPowderIcon from '../assets/cards/BlackPowder.png'
import DragonEyeIcon from '../assets/cards/DragonEye.png'
import FireIcon from '../assets/cards/Fire.png'
import FoodRationIcon from '../assets/cards/FoodRation.png'
import FuligioSeptiaIcon from '../assets/cards/FuligioSeptia.png'
import GlassIcon from '../assets/cards/Glass.png'
import GlowStoneIcon from '../assets/cards/GlowStone.png'
import HammerIcon from '../assets/cards/Hammer.png'
import IronOreIcon from '../assets/cards/IronOre.png'
import LeatherIcon from '../assets/cards/Leather.png'
import LumberIcon from '../assets/cards/Lumber.png'
import NailsIcon from '../assets/cards/Nails.png'
import OldClothIcon from '../assets/cards/OldCloth.png'
import RopeIcon from '../assets/cards/Rope.png'

const METAL = "Metal";
const LUMBER = "Lumber";
const ROPE = "Rope";
const GLOW_STONE = "Glow Stone";
const FELUGIO_SEPTIA = "Felugio Septia";
const GLASS = "Glass";
const DRAGON_EYE = "Dragon Eye";
const HAMMER = "Hammer";
const FOOD_RATION = "Food Ration";
const LEATHER = "Leather";
const IRON_ORE ="Iron Ore";
const NAILS = "Nails";
const COTTON = "Cotton";
const OLD_CLOTH = "Old Cloth";
const FIRE = "Fire";

export default class DB {
    constructor() {
        this.forgeCards = this.initForgeCards();
        this.specialCards = this.initSpecialCards();
    }
    initForgeCards() {
        const metal = new ForgeCard(METAL, MetalIcon, 0);
        const lumber = new ForgeCard(LUMBER, LumberIcon, 0);
        const rope = new ForgeCard(ROPE, RopeIcon, 0);
        const glowStone = new ForgeCard(GLOW_STONE, GlowStoneIcon, 0);
        const feulgioSeptia = new ForgeCard(FELUGIO_SEPTIA, FuligioSeptiaIcon, 0);
        const glass = new ForgeCard(GLASS, GlassIcon, 0);
        const dragonEye = new ForgeCard(DRAGON_EYE, DragonEyeIcon, 0);
        const hammer = new ForgeCard(HAMMER, HammerIcon, 0);
        const foodRation = new ForgeCard(FOOD_RATION, FoodRationIcon, 0);
        const leather = new ForgeCard(LEATHER, LeatherIcon, 0);
        const ironOre = new ForgeCard(IRON_ORE, IronOreIcon, 0);
        const nails = new ForgeCard(NAILS, NailsIcon, 0);
        const cotton = new ForgeCard(COTTON, CottonIcon, 0);
        const oldCloth = new ForgeCard(OLD_CLOTH, OldClothIcon, 0);
        const fire = new ForgeCard(FIRE, FireIcon, 0);

        const cards = [metal, lumber, rope, glowStone, feulgioSeptia, glass, dragonEye, hammer,
                        foodRation, leather, ironOre, nails, cotton, oldCloth, fire];

        return cards;
    }

    getForgeCardByName(name) {
        const cardsMatchingName = this.forgeCards.filter(card => card.name === name);
        return cardsMatchingName[0];
    }
    initSpecialCards() {
        
        const harpoon = new SpecialCard("Harpoon", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/cards.png?alt=media&token=31e96604-b5b8-4344-ab10-99857d221245",
         [
                {forgeCard: LUMBER, quantity: 1},
                {forgeCard: ROPE, quantity: 1},
                {forgeCard: METAL, quantity: 1}
            ]);
        

        
        const BattlePoints250 = new SpecialCard("250 Battle Points", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/1000BattlePoints.JPG?alt=media&token=bab43c9d-675f-4441-96c1-3bb5f9132c77", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: FIRE, quantity: 1}
        ])
        const BattlePoints1000 = new SpecialCard("1000 Battle Points", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/1000BattlePoints.JPG?alt=media&token=bab43c9d-675f-4441-96c1-3bb5f9132c77", 
        [
            {forgeCard: GLOW_STONE, quantity: 1},
            {forgeCard: FIRE, quantity: 1},
            {forgeCard: DRAGON_EYE, quantity: 2}
        ])
        const Chopped = new SpecialCard("Chopped", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Chopped.JPG?alt=media&token=0cb9976f-ef38-451b-beb1-666de4f3025b",
         [
            {forgeCard: HAMMER, quantity: 1},
            {forgeCard: LUMBER, quantity: 1},
            {forgeCard: METAL, quantity: 1}
        ])
        const Deflection = new SpecialCard("Deflection", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Deflection.JPG?alt=media&token=39bb02bf-a172-4de8-bb7e-76751e468275", 
        [
            {forgeCard: METAL, quantity: 1},
            {forgeCard: DRAGON_EYE, quantity: 1}
        ])
        const InstantAccess = new SpecialCard("Instant Access", "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/InstantAccess.JPG?alt=media&token=69461ade-6885-4136-9029-9784867a904c",
        [
            {forgeCard: METAL, quantity: 2},
            {forgeCard: NAILS, quantity: 1}
        ])
        const ShardOfScroll = new SpecialCard("Shard of Scroll", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/ShardOfScroll.png?alt=media&token=9496da65-6bec-4008-bcf9-a5db79ec1279", 
        [
            {forgeCard: OLD_CLOTH, quantity: 2},
            {forgeCard: FIRE, quantity: 1}
        ])
        const Shield = new SpecialCard("Shield", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Shield.JPG?alt=media&token=aea1a0fb-39a0-456f-9c41-a383ed5538cf",
        [
            {forgeCard: LEATHER, quantity: 1},
            {forgeCard: METAL, quantity: 1}
        ])
        const spear = new SpecialCard("Spear", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Spear.JPG?alt=media&token=b337dbdd-7ed4-42f3-b451-fe78c0ff3494", 
        [
            {forgeCard: METAL, quantity: 1}, 
            {forgeCard: LUMBER, quantity: 1},
            {forgeCard: ROPE, quantity: 1}
        ]);
        const sword = new SpecialCard("Sword", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Sword.JPG?alt=media&token=2d8ee977-a293-409c-b2b5-ba50604142ad", 
        [
            {forgeCard: METAL, quantity: 1},
            {forgeCard: HAMMER, quantity: 1},
            {forgeCard: FIRE, quantity: 1}
        ])
        const DoubleXP = new SpecialCard("Double XP", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/DoubleXP.PNG?alt=media&token=4e5c6144-1b96-4dc5-a766-d90afb2c0c4a", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: GLOW_STONE, quantity: 1},
            {forgeCard: OLD_CLOTH, quantity: 1}
        ])
        const Purge = new SpecialCard("Purge", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Purge.PNG?alt=media&token=81eabd44-f1c1-4d26-b79a-10b415543e23", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: GLOW_STONE, quantity: 1},
            {forgeCard: OLD_CLOTH, quantity: 1},
            {forgeCard: FIRE, quantity: 2}
        ])
        const Thief = new SpecialCard("Thief", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Thief.PNG?alt=media&token=03a8e502-5f5f-4c3e-8bed-7d4d812ddcbd", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: ROPE, quantity: 1},
            {forgeCard: COTTON, quantity: 2},
            {forgeCard: OLD_CLOTH, quantity: 1}
        ])
        const XPFreeze = new SpecialCard("XP Freeze", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/XPFreeze.PNG?alt=media&token=3a12c403-6eb6-428e-b3f6-fc0a07a9179c", 
        [
            {forgeCard: DRAGON_EYE, quantity: 2},
            {forgeCard: FELUGIO_SEPTIA, quantity: 1},
            {forgeCard: GLASS, quantity: 2}
        ])
        const PickPocket = new SpecialCard("Pick Pocket", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/PickPocketCard.jpeg?alt=media&token=ada6dbe1-d90e-4128-8bde-dce02792f71f", 
        [
            {forgeCard: LEATHER, quantity: 1},
            {forgeCard: FELUGIO_SEPTIA, quantity: 1},
            {forgeCard: COTTON, quantity: 1},
            {forgeCard: OLD_CLOTH, quantity: 2}
        ])
        const Anonymous = new SpecialCard("Anonymous", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/Anonymous.PNG?alt=media&token=f7e01533-fdc6-4775-8604-694d6491c8f9", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: OLD_CLOTH, quantity: 1},
            {forgeCard: FIRE, quantity: 2}
        ])
        const BombsAway = new SpecialCard("Bombs Away", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/BombsAway.PNG?alt=media&token=3fba7ba8-aafc-4e11-a711-8e01fc5d9ee5", 
        [
            {forgeCard: METAL, quantity: 1},
            {forgeCard: ROPE, quantity: 1},
            {forgeCard: FIRE, quantity: 2}
        ])
        const HealthPotion = new SpecialCard("Health Potion", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/HealthPotion.PNG?alt=media&token=caa5671a-25ab-49cb-a492-f42be6b443bf", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: FOOD_RATION, quantity: 2},
            {forgeCard: GLASS, quantity: 1}
        ])
        const SmokeScreen = new SpecialCard("Smoke Screen", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/SmokeScreen.PNG?alt=media&token=4edb5fe0-d43e-4577-bb97-f1efa85c178e", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: OLD_CLOTH, quantity: 2},
            {forgeCard: FIRE, quantity: 2}
        ])
        const TimeShift = new SpecialCard("Time Shift", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/TimeShift.PNG?alt=media&token=a4eca151-5746-474e-9c4d-4856c2ff67c3", 
        [
            {forgeCard: GLOW_STONE, quantity: 2},
            {forgeCard: OLD_CLOTH, quantity: 1},
            {forgeCard: FIRE, quantity: 2}
        ])
        const AttackMultiplier = new SpecialCard("Attack Multiplier", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/AttackMultiplier.png?alt=media&token=76faad4f-887a-46d3-9ffa-47030b231e55", 
        [
            {forgeCard: FOOD_RATION, quantity: 1},
            {forgeCard: GLASS, quantity: 1},
            {forgeCard: FIRE, quantity: 1}
        ])
        const SliceAndDice = new SpecialCard("Slice and Dice", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/SliceAndDice.PNG?alt=media&token=c5c61f88-7bef-4a72-8995-c48365a2945f", 
        [
            {forgeCard: HAMMER, quantity: 1},
            {forgeCard: LUMBER, quantity: 1},
            {forgeCard: METAL, quantity: 2}
        ])
        const StaffOfWisdom = new SpecialCard("Staff of Wisdom", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/StaffOfWisdom.png?alt=media&token=5ff51b78-3092-440b-958a-619a9bf6b2cb", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: GLOW_STONE, quantity: 1},
            {forgeCard: LUMBER, quantity: 1}
        ])
        const StrategySession = new SpecialCard("Strategy Session", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/StrategySession.png?alt=media&token=2fff7fbe-82e4-4cfd-9084-360abda7d566", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: GLOW_STONE, quantity: 2},
            {forgeCard: GLASS, quantity: 1}
        ])
        const wandOfWonder = new SpecialCard("Wand of Wonder",
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/WandOfWonder.png?alt=media&token=d9b163b6-afe6-4aff-bd0f-92692696275d", 
        [
            {forgeCard: LUMBER, quantity: 1},
            {forgeCard: GLOW_STONE, quantity: 1},
            {forgeCard: FIRE, quantity: 1},
            {forgeCard: DRAGON_EYE, quantity: 2}
        ]);
        const Clarity = new SpecialCard("Clarity", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/ClarityCard.png?alt=media&token=f2682dc9-ebee-435b-960a-a7f16ead8a98", 
        [
            {forgeCard: DRAGON_EYE, quantity: 3},
            {forgeCard: GLOW_STONE, quantity: 1},
            {forgeCard: FIRE, quantity: 1}
        ])
        const FireAndIce = new SpecialCard("Fire and Ice", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/FireAndIce.PNG?alt=media&token=80f1c506-0ac3-4f57-88f4-1124971512cf", 
        [
            {forgeCard: GLOW_STONE, quantity: 1},
            {forgeCard: GLASS, quantity: 1},
            {forgeCard: FIRE, quantity: 1}
        ])
        const InstaBlast = new SpecialCard("Insta-Blast", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/InstaBlast.PNG?alt=media&token=4a3d84b8-3184-458f-88d4-f07b75765614", 
        [
            {forgeCard: GLOW_STONE, quantity: 2},
            {forgeCard: METAL, quantity: 1},
            {forgeCard: GLASS, quantity: 1}
        ])
        const MountainTop = new SpecialCard("Mountain Top", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/MountainTop.PNG?alt=media&token=38e0a0ab-c548-49fa-a36b-7c83bff2f182", 
        [
            {forgeCard: IRON_ORE, quantity: 5}
        ])
        const PowerStone = new SpecialCard("Power Stone", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/PowerStone.PNG?alt=media&token=0f14186f-bf04-4911-9802-cd1031ebd4fc", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: GLOW_STONE, quantity: 3}
        ])
        const SkeletonKey = new SpecialCard("Skeleton Key", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/SkeletonKey.PNG?alt=media&token=06fd8749-9ff1-40e9-bdd9-dc6ca15b9271", 
        [
            {forgeCard: DRAGON_EYE, quantity: 1},
            {forgeCard: HAMMER, quantity: 2},
            {forgeCard: METAL, quantity: 1},
            {forgeCard: FIRE, quantity: 1}
        ])
        const SongOfFortune = new SpecialCard("Song of Fortune", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/SongOfFortune.PNG?alt=media&token=7b460c63-d9b1-4893-b497-9a56d0dca432", 
        [
            {forgeCard: METAL, quantity: 1},
            {forgeCard: ROPE, quantity: 1},
            {forgeCard: FIRE, quantity: 1}
        ])
        const ThinkingCap = new SpecialCard("Thinking Cap", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/ThinkingCap.PNG?alt=media&token=407d4ea1-d8ae-4b69-96ae-0f38f713e399", 
        [
            {forgeCard: METAL, quantity: 2},
            {forgeCard: OLD_CLOTH, quantity: 1}
        ])
        const TippingPoint = new SpecialCard("Tipping Point", 
        "https://firebasestorage.googleapis.com/v0/b/scientia-forge-d16e8.appspot.com/o/TippingPoint.PNG?alt=media&token=0b46c54b-8d01-4326-b3d2-2f19e3220120", 
        [
            {forgeCard: HAMMER, quantity: 1},
            {forgeCard: METAL, quantity: 2},
            {forgeCard: NAILS, quantity: 1},
            {forgeCard: ROPE, quantity: 1}
        ])
        const cards = [BattlePoints250, BattlePoints1000, Chopped, Deflection, InstantAccess, ShardOfScroll, 
        Shield, spear, sword, DoubleXP, Purge, Thief, XPFreeze, PickPocket, Anonymous, BombsAway, 
        HealthPotion, SmokeScreen, TimeShift, AttackMultiplier, SliceAndDice, StaffOfWisdom, 
        StrategySession, wandOfWonder, Clarity, FireAndIce, InstaBlast, MountainTop, PowerStone,
         SkeletonKey, SongOfFortune, ThinkingCap, TippingPoint];
         // might be missing: invisibility cloak, hand of god
        return cards;
    }




}