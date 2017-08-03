
export const fsaCommands = [
    {
        type: 'ADDRESS_KEY_VALUE',
        payload: {
            address: '0x1a63f28550ae27e0a192d91d073ea4e97dd089b0'
        },
    },
    {
        type: 'UINT_KEY_VALUE',
        payload: {
            code: 1337
        },
    },
    {
        type: 'BYTES32_KEY_VALUE',
        payload: {
            bytes32: 'dog'
        }
    },
    {
        type: 'BYTES32_KEY_VALUE',
        payload: {
            bytes32: '0x0fa2389'
        }
    },
    {
        type: 'BYTES32_KEY_VALUE',
        payload: {
            bytes32: '0xdog'
        },
        error: true
    },
    {
        type: 'IPLD_OBJECT',
        payload: {
            name: 'hodor',
            class: 'ogre',
            inventory: ['axe']
        }
    },
]
