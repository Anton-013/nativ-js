import { expect, test } from "vitest"
import { aD } from "vitest/dist/chunks/reporters.d.79o4mouw.js"

function icreaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Anton',
        age: 29,
        address: {
            title: 'Moscow',
        }
    }

    icreaseAge(user)

    expect(user.age).toBe(30)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    let users = [
        {
            name: 'Anton',
            age: 29,
        },
        {
            name: 'Dimych',
            age: 32,
        },
    ]

    let admins = users

    admins.push({ name: 'Bandyugan', age: 10 })

    expect(users[2]).toEqual({ name: 'Bandyugan', age: 10 })
})

test('value type test', () => {
    let usersCount = 100

    let adminsCount = usersCount


})

test('reference type test', () => {
    const address = {
        title: 'Minsk',
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address,
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address,
    }

    address.title = 'Minsk City'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk City')
})

test('reference type array test', () => {
    const address = {
        title: 'Minsk',
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address,
    }
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address,
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})