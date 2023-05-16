import {ComponentWatcher, Gui} from "../../lib/index.js";
import {ActionRowBuilder, EmbedBuilder} from "discord.js";
import MoveComponent from "./MoveComponent.js";
import StatusComonent from "./StatusComonent.js";

const componentWatcher = new ComponentWatcher(
    MoveComponent, StatusComonent
)

class MusicPlayer extends Gui {
    static useModules = [componentWatcher];

    static async init(g) {
        const data = g.dataManager.getData();
        data.list = [
            {
                title: 'Nie obchodzi mnie',
                author: 'Czuxx',
                length: '2:30',
                icon: 'https://obcas.pl/wp-content/uploads/2022/01/czuux-1.png'
            },
            {
                title: 'Random track',
                author: 'Nonanme',
                length: '21:37',
                icon: 'https://img.wprost.pl/img/graficzne-przedstawienie-emotikony-xd/6d/86/6ef09a8f0837762197930332167e.jpeg'
            }
        ];
        data.position = 0;
        data.isPlay = true;
    }

    static getSong(list, position) {
        return list[position];
    }

    static async render(g) {
        const data = g.dataManager.getData();
        const song = MusicPlayer.getSong(data.list, data.position);
        const embed = new EmbedBuilder()
            .setTitle("Odtwarzacz muzyki")
            .setDescription(`**Tytuł:** ${song.title}\n**Autor:** ${song.author}\n**Długość utóru:** ${song.length}`)
            .setThumbnail(song.icon)
        const forwardComponent = new MoveComponent(g, true).render();
        const backwardComponent = new MoveComponent(g, false).render();
        const statusComponent = new StatusComonent(g).render();
        return {
            content: ' ',
            embeds: [embed],
            components: [
                new ActionRowBuilder().setComponents(backwardComponent, statusComponent, forwardComponent)
            ]
        }
    }

    static async use() {

    }
}

export default MusicPlayer;