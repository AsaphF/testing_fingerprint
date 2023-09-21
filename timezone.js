const a = { // Amazonas
    latitude: -3.10719,
    longitude: -60.0261
}
const n = { // Noronha
    latitude: -3.84036,
    longitude: -32.4113
}
const s = { // São Paulo
    latitude: -23.5489,
    longitude: -46.6388
}
const t = 10000
console.log(randomLocation.randomCirclePoint(p, t))
navigator.permissions.query({ name: 'geolocation' }).then((result) => {
    if (result.state === 'granted') {
      navigator.geolocation.getCurrentPosition((pos) => console.log(pos), (err) => console.log(err))
    } else if (result.state === 'prompt') {
      console.log('nop')
    }
    // Don't do anything if the permission was denied.
})