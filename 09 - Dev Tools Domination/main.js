const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
    // Regular
    console.log('hello')
    // Interpolated
    console.log('hello I am ' + '%s', 'K')
    // Styled
    console.log('%c I am some great text','font-size: 50px;  color:red; background: green' )
    // warning!
    console.warn('STOP!')
    // Error :|
    console.error('Not found!')
    // Info
    console.info('I love you')
    // Testing
    console.assert(1===2, 'that is wrong')
    // clearing
            // console.clear()
    // Viewing DOM Elements
    // console.log(p)
    // console.dir(p)
    // Grouping together
    dogs.forEach(dog => {
      // console.group(`${dog.name}`)
      console.groupCollapsed(`${dog.name}`)
      console.log(`This is ${dog.name}`)
      console.log(`${dog.name} is ${dog.age} years old`)
      console.groupEnd(`${dog.name}`)
    })

    // counting
    console.count('Sabi')
    console.count('Sabierer')
    console.count('Sabi')
    console.count('Sabioeire')
    console.count('Sabi')
    console.count('Sabinaa')
    console.count('Sabi')
    console.count('Sabi')
    console.count('Sabi')

    // timing
    console.time('fetching data')
    fetch('https://api.github.com')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data')
        console.log(data)
      })

    //
    console.table(dogs)