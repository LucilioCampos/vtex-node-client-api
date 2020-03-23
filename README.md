# VTEX NODE API CLIENT FOR NODE
This client retrieve data from vtex-apis

## Installation
Use the package manager npm or yarn do install package

ex: ``` npm install vtex-node-client-api or yarn add vtex-node-client-api ```

## Usage

```
    const Client = require('vtex-node-client-api')

    const requests = Client({
        accountName: 'your-vtex-account-name',
        appKey: 'your-vtex-appKey',
        appToken: 'your-vtex-appToken',
        enviroment: 'ex: myvtex.com or vtexcommercestable.com.br'
    })

    or by VtexIdclientAutCookie

    const requests = Client({
        accountName: 'your-account-name',
        autToken: 'your-VtexIdclientAutCookie'
    })
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.