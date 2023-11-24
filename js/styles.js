export function changeBackgroundAndMenuColor(pathname) {
    switch (pathname) {
        case '/':
            document.querySelector('body').classList = ''
            document.querySelector('body').classList.add('bgHome')

            document.querySelector('#app').classList = ''
            document.querySelector('#app').classList.add('home')

            document.querySelector('#exploration').classList.contains('selected') ? document.querySelector('#exploration').classList.remove('selected') : ''

            document.querySelector('#universe').classList.contains('selected') ? document.querySelector('#universe').classList.remove('selected') : ''

            document.querySelector('#home').classList.add('selected')
            break;
        case '/universe':
            document.querySelector('body').classList = ''
            document.querySelector('body').classList.add('bgUniverse')

            document.querySelector('#app').classList = ''
            document.querySelector('#app').classList.add('common')

            document.querySelector('#home').classList.contains('selected') ? document.querySelector('#home').classList.remove('selected') : ''

            document.querySelector('#exploration').classList.contains('selected') ? document.querySelector('#exploration').classList.remove('selected') : ''

            document.querySelector('#universe').classList.add('selected')
            break;
        case '/exploration':
            document.querySelector('body').classList = ''
            document.querySelector('body').classList.add('bgExploration')

            document.querySelector('#app').classList = ''
            document.querySelector('#app').classList.add('common')

            document.querySelector('#home').classList.contains('selected') ? document.querySelector('#home').classList.remove('selected') : ''

            document.querySelector('#universe').classList.contains('selected') ? document.querySelector('#universe').classList.remove('selected') : ''

            document.querySelector('#exploration').classList.add('selected')
            break;
        default:
            document.querySelector('body').classList = ''
            document.querySelector('body').classList.add('bgUniverse')

            document.querySelector('#app').classList = ''
            document.querySelector('#app').classList.add('home')

            document.querySelector('nav a').classList.remove('selected')
            break;
    }
}