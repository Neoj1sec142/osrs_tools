export interface WikiLink{
    title: string;
    url: string;
    calc?: string;
}

export interface WikiCategory{
    title: string;
    links: WikiLink[];
}



export const wikiData: WikiCategory[] = [
    {
      title: 'Quests',
      links: [
        { title: 'Home', url: 'https://www.google.com' },
        { title: 'About', url: 'https://www.google.com' },
        { title: 'Contact', url: 'https://www.google.com' },
      ],
    },
    {
        title: 'Skilling',
        links: [
          { title: 'Attack', url: 'https://oldschool.runescape.wiki/w/Crafting', calc: 'https://oldschool.runescape.wiki/w/Calculator:Attack' },
          { title: 'Strength', url: 'https://oldschool.runescape.wiki/w/Strength', calc: 'https://oldschool.runescape.wiki/w/Calculator:Strength' },
          { title: 'Defense', url: 'https://oldschool.runescape.wiki/w/Defense', calc: 'https://oldschool.runescape.wiki/w/Calculator:Defense' },
          { title: 'Ranging', url: 'https://oldschool.runescape.wiki/w/Ranging', calc: 'https://oldschool.runescape.wiki/w/Calculator:Ranging' },
          { title: 'Magic', url: 'https://oldschool.runescape.wiki/w/Magic', calc: 'https://oldschool.runescape.wiki/w/Calculator:Magic' },
          { title: 'Prayer', url: 'https://oldschool.runescape.wiki/w/Prayer', calc: 'https://oldschool.runescape.wiki/w/Calculator:Prayer' },
          { title: 'Runecrafting', url: 'https://oldschool.runescape.wiki/w/Runecrafting', calc: 'https://oldschool.runescape.wiki/w/Calculator:Runecrafting' },
          { title: 'Construction', url: 'https://oldschool.runescape.wiki/w/Construction', calc: 'https://oldschool.runescape.wiki/w/Calculator:Construction' },
          { title: 'Hitpoints', url: 'https://oldschool.runescape.wiki/w/Hitpoints', calc: 'https://oldschool.runescape.wiki/w/Calculator:Hitpoints' },
          { title: 'Agility', url: 'https://oldschool.runescape.wiki/w/Agility', calc: 'https://oldschool.runescape.wiki/w/Calculator:Agility' },
          { title: 'Herblore', url: 'https://oldschool.runescape.wiki/w/Herblore', calc: 'https://oldschool.runescape.wiki/w/Calculator:Herblore' },
          { title: 'Thieving', url: 'https://oldschool.runescape.wiki/w/Thieving', calc: 'https://oldschool.runescape.wiki/w/Calculator:Thieving' },
          { title: 'Crafting', url: 'https://oldschool.runescape.wiki/w/Crafting', calc: 'https://oldschool.runescape.wiki/w/Calculator:Crafting' },
          { title: 'Fletching', url: 'https://oldschool.runescape.wiki/w/Fletching', calc: 'https://oldschool.runescape.wiki/w/Calculator:Fletching' },
          { title: 'Slayer', url: 'https://oldschool.runescape.wiki/w/Slayer', calc: 'https://oldschool.runescape.wiki/w/Calculator:Slayer' },
          { title: 'Hunter', url: 'https://oldschool.runescape.wiki/w/Hunter', calc: 'https://oldschool.runescape.wiki/w/Calculator:Hunter' },
          { title: 'Mining', url: 'https://oldschool.runescape.wiki/w/Mining', calc: 'https://oldschool.runescape.wiki/w/Calculator:Mining' },
          { title: 'Smithing', url: 'https://oldschool.runescape.wiki/w/Smithing', calc: 'https://oldschool.runescape.wiki/w/Calculator:Smithing' },
          { title: 'Fishing', url: 'https://oldschool.runescape.wiki/w/Fishing', calc: 'https://oldschool.runescape.wiki/w/Calculator:Fishing' },
          { title: 'Cooking', url: 'https://oldschool.runescape.wiki/w/Cooking', calc: 'https://oldschool.runescape.wiki/w/Calculator:Cooking' },
          { title: 'Firemaking', url: 'https://oldschool.runescape.wiki/w/Firemaking', calc: 'https://oldschool.runescape.wiki/w/Calculator:Firemaking' },
          { title: 'Woodcutting', url: 'https://oldschool.runescape.wiki/w/Woodcutting', calc: 'https://oldschool.runescape.wiki/w/Calculator:Woodcutting' },
          { title: 'Farming', url: 'https://oldschool.runescape.wiki/w/Farming', calc: 'https://oldschool.runescape.wiki/w/Calculator:Farming' },
        ],
    },
    {
        title: 'Minigames',
        links: [
          { title: 'Barbarian Assault', url: 'https://www.google.com' },
          { title: 'Bounty Hunter', url: 'https://www.google.com' },
          { title: 'Castle Wars', url: 'https://www.google.com' },
          { title: 'Clan Wars', url: '' },
          { title: 'Emirs Arena', url: '' },
          { title: 'Fortis Colosseum', url: '' },
          { title: 'Inferno', url: '' },
          { title: 'Last Man Standing', url: '' },
          { title: 'Mage Arena', url: 'https://oldschool.runescape.wiki/w/Mage_Arena' },
          { title: 'Nightmare Zone', url: '' },
          { title: 'Pest Control', url: '' },
          { title: 'Soul Wars', url: '' },
          { title: 'Tackle organised crime', url: '' },
          { title: 'Temple Trekking', url: '' },
          { title: 'Inferno', url: '' },
          { title: 'Inferno', url: '' },

        ],
    },
    {
        title: 'Raids',
        links: [
          { title: 'Home', url: 'https://www.google.com' },
          { title: 'About', url: 'https://www.google.com' },
          { title: 'Contact', url: 'https://www.google.com' },
        ],
    },
    {
        title: 'Youtube Channels',
        links: [
          { title: 'Home', url: 'https://www.google.com' },
          { title: 'About', url: 'https://www.google.com' },
          { title: 'Contact', url: 'https://www.google.com' },
        ],
    }
]