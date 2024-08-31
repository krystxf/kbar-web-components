import { createContext, ContextRoot } from '@lit/context';

export type KbarContext = Boolean;
// {
//     isOpen: boolean;
//     setIsOpen: (isOpen: boolean) => void;
// };

const kbarContextKey = Symbol('kbar-context');
export const kbarContext = createContext<KbarContext>(kbarContextKey);

new ContextRoot().attach(document.body);
