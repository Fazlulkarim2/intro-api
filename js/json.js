// Javascript Object notation 
// JSON /
const user = { id: 11, name: ' Gorib  Amir', job: 'actor' };
const stingified = JSON.stringify(user);
// console.log(user);
// console.log(stingified);

const shop = {
    name: 'Alia store',
    address: 'Ranbir road',
    profit: 15000,
    prodructs: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isexpensive: false
};

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);

