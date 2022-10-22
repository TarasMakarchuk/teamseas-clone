import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import { createClient, defaultExchanges, Provider, subscriptionExchange } from "urql";
import { createClient as createWSClient } from "graphql-ws";

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

const wsClient = createWSClient({
    url: 'ws://localhost:3001/graphql',
});

const client = createClient({
    url: 'http://localhost:3001/graphql',
    exchanges: [
        ...defaultExchanges,
        subscriptionExchange({
           forwardSubscription: (operation) => ({
               subscribe: (sink: any) => ({
                   unsubscribe: wsClient.subscribe(operation, sink),
               }),
           }),
        }),
    ],
});

root.render(
    <React.StrictMode>
        <ColorModeScript/>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <Provider value={client}>
                <App/>
            </Provider>
        </DevSupport>
    </React.StrictMode>,
)
