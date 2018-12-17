class Hero {
    /**
     * @param {string} name of hero
     * @param {int} index for [0:cat, 1:robot, 2:alien] 
     * @param {int} index for [0:wizard, 1:cleric, 2:warrior, 3:paladin, 4:hunter, 5:thief]
     */
    constructor(name, race, clase, avatar) {
        this.avatar = avatar;
        this.setStats(name, race, clase);
        this.setExp(4440);
    }

    setStats(name, race, clase) {
        this.clase = ["wizard", "cleric", "warrior", "paladin", "hunter", "thief"][clase];
        // this.race = ["cat", "robot", "alien"][race];
        this.race = ["female", "male"][race];
        this.name = name;
        this.exp = 0;
        this.setAttribs(race, clase);
    }

    setAttribs(race, clase) {
        // Strength, Agility, intelligence // 1 point per race
        const human = [0, 1, 0];
        const dwarf = [1, 0, 0];
        const elf = [0, 0, 2];
        const racePoints = [human, dwarf, elf];
        // Strength, Agility, intelligence // 6 points per class
        const wizard = [1, 2, 3];
        const cleric = [2, 1, 3];
        const warrior = [3, 2, 1];
        const paladin = [3, 1, 2];
        const hunter = [2, 3, 1];
        const thief = [1, 3, 2];
        const classPoints = [wizard, cleric, warrior, paladin, hunter, thief];
        const attribs = [];
        //Add race and class' points to get the players final attribute points 
        for (let i = 0; i < 3; i++) {
            attribs[i] = racePoints[race][i] + (classPoints[clase][i] * 3);
        }
        this.strength = attribs[0];
        this.agility = attribs[1];
        this.intelligence = attribs[2];
    }

    calcStats() {
        switch (this.clase) {
            // STRENGTH = Health, Damage and Threat
            case 'paladin':
            case 'warrior':
                this.setStrength();
                this.attrib = "strength"
                break;
                // AGILITY = Critical, Initiative and Armor 
            case 'hunter':
            case 'thief':
                this.setAgility();
                this.attrib = "agility"
                break;
                // INTELLIGENCE = Mana and Magic Damage
            case 'wizard':
            case 'cleric':
                this.setIntelligence();
                this.attrib = "intelligence"
                break;
            default:
                break;
        }
    }

    setExp(exp) {
        this.exp += exp;
        const lvlUp = [200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200, 102400];
        for (let i = 0; i < lvlUp.length; i++) {
            if (this.exp < lvlUp[i]) {
                this.setLvl(i + 1);
                break;
            }
        }

        this.calcStats();
    }
    setLvl(lvl = 1) {
        this.lvl = lvl;
        this.upIntelligence();
        this.upAgility();
        this.upStrength();
    }

    upIntelligence(intelligence = 1) {
        this.intelligence += intelligence
    }
    upAgility(agility = 1) {
        this.agility += agility;
    }
    upStrength(strength = 1) {
        this.strength += strength;
    }



    setStrength() {
        this.health = ~~((this.strength * 4) + (this.agility * 2.5) + (this.intelligence * 2) + (this.lvl * 1))*3;
        this.damage = ((this.strength * 1.2) + (this.agility * .5) + (this.intelligence * .5) + (this.lvl)).toFixed(1);

        this.mana = ~~((this.strength * .1) + (this.agility * .05) + (this.intelligence * .2) + (this.lvl * .5));
        this.magic = ((this.strength * .04) + (this.agility * .06) + (this.intelligence * .5) + (this.lvl * .3)).toFixed(1);

        this.armor = ((this.strength * .15) + (this.agility * .5) + (this.intelligence * .1) + (this.lvl * .3)).toFixed(1);
        this.critic = ((this.strength * .1) + (this.agility * .5) + (this.intelligence * .04) + (this.lvl * .3)).toFixed(1);
    }
    setAgility() {
        this.health = ~~((this.agility * 3.8) + (this.strength * 1.8) + (this.intelligence * 1.6) + (this.lvl * 1))*3
        this.damage = ((this.agility * .8) + (this.strength * .6) + (this.intelligence * .4) + (this.lvl)).toFixed(1);

        this.mana = ~~( (this.agility * .25) + (this.strength * .05) +(this.intelligence * .1) +(this.lvl * .5));
        this.magic = ((this.agility * .08) + (this.strength * .04) + (this.intelligence * .6) + (this.lvl * .3)).toFixed(1);

        this.armor = ((this.agility * .5) + (this.strength * .2) + (this.intelligence * .2) + (this.lvl * .3)).toFixed(1);
        this.critic = ((this.agility * .8) + (this.strength * .04) + (this.intelligence * .06) + (this.lvl * .3)).toFixed(1);
    }
    setIntelligence() {
        this.health = ~~((this.intelligence * 3) + (this.strength * 1.8) + (this.agility * 1.6) + (this.lvl * 1))*3;
        this.damage = ((this.intelligence * .6) + (this.strength * .8) + (this.agility * .4) + (this.lvl)).toFixed(1);

        //mana is times you can add magic to power
        this.mana = ~~((this.intelligence * .45) + (this.strength * .15) + (this.agility * .25) + (this.lvl * .5));
        this.magic = ((this.intelligence * .8) + (this.strength * .04) + (this.agility * .06) + (this.lvl * .3)).toFixed(1);

        this.armor = ((this.intelligence * .3) + (this.strength * .1) + (this.agility * .5) + (this.lvl * .3)).toFixed(1);
        this.critic = ((this.intelligence * .2) + (this.strength * .04) + (this.agility * .4) + (this.lvl * .3)).toFixed(1);
    }
}

export default Hero;