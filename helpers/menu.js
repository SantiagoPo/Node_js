var colors = require('colors');
const inquirer = require('inquirer');


const preguntas = [
    {
        type: 'list',
        name: 'options',
        message: colors.rainbow('lista de actividades por hacer?'),
        choices: [
            {
                value: '1',
                name: '1 Acceder a la actividad',
            },
            {
                value: '2',
                name: '2 Eliminar la actividad',
            },
            {
                value: '3',
                name: '3 Calificar la actividad',
            },
            {
                value: '0',
                name: '0 Finalizar y salir',
            }
        ]
    }
]


const menu = () => {

    console.log(`${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}`);
    console.log(`${'          Mi primera aplicacion        '.bgGray.black}`);
    console.log(`${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}${'*'.green}${'*'.red}${'*'.blue}`);

    inquirer.prompt(preguntas).then(({entry}) => {
        console.log(entry);
    })
}




module.exports = {
    menu
};
