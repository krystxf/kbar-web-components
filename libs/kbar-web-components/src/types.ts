export type KbarAction = {
    id: string;
    label: string;
    keywords: string[];
    section: string;
    perform: () => void;
};
