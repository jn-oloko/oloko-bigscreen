import React from 'react';
import { RestfulProvider } from 'restful-react';
const ApiProvider: React.FC<{}> = ({ children }) => {
    return (
    <RestfulProvider base={"/"}>
{children}
    </RestfulProvider>
        )
}
export default ApiProvider