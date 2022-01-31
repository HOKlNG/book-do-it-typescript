// 잔여연산자
let address: any = {
    country: 'Korea',
    city:'seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 street, 2 Floor ABC building'
}

const {country, city, ...detail} = address

console.log (detail)