import promptSync from 'prompt-sync'

import type Calculo from './Calculo.js'
import Bhaskara from './Bhaskara.js'
import Divisao from './Divisao.js'
import Multiplicacao from './Multiplicacao.js'
import Soma from './Soma.js'
import Subtracao from './Subtracao.js'

const prompt = promptSync()

const menu = [
    '',
    '===== CALCULADORA =====',
    '[1] Soma',
    '[2] Subtracao',
    '[3] Multiplicacao',
    '[4] Divisao',
    '[5] Bhaskara',
    '[67] Sair',
    ''
].join('\n')

let opcao = ''

while (opcao !== '67') {
    console.log(menu)
    opcao = prompt('Escolha uma opcao: ')

    if (opcao === '67') {
        console.log('Ate a proxima!')
        break
    }

    const a = Number(prompt('Informe o numero a: '))
    const b = Number(prompt('Informe o numero b: '))

    let calculo: Calculo

    switch (opcao) {
        case '1':
            calculo = new Soma()
            break
        case '2':
            calculo = new Subtracao()
            break
        case '3':
            calculo = new Multiplicacao()
            break
        case '4':
            if (b === 0) {
                console.log('Nao e possivel dividir por zero.')
                continue
            }
            calculo = new Divisao()
            break
        case '5': {
            if (a === 0) {
                console.log('O numero a nao pode ser zero (nao seria uma funcao do segundo grau).')
                continue
            }

            const c = Number(prompt('Informe o numero c: '))
            const raizes = new Bhaskara(a, b, c).calcularRaizes()

            console.log(raizes.length === 0
                ? 'A funcao nao possui raizes reais.'
                : `As raizes sao: ${raizes.join(' e ')}`)
            continue
        }
        default:
            console.log(`Opcao nao reconhecida.`)
            continue
    }

    console.log(`O resultado da operacao e: ${calculo.calcular(a, b)}`)
}
