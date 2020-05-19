export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
    phone?: string;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager
}

export let MyWorkersDataBase: MyWorker[] = [
    { id: 1, name: 'Иван', surname: 'Иванов', phone: '+7(927)103-8736', type: 0 },
    { id: 2, name: 'Петр', surname: 'Петров', phone: '+7(954)279-6020', type: 1 },
    { id: 3, name: 'Сидор', surname: 'Сидоров', phone: '+7(935)659-0071', type: 2 },
    { id: 4, name: 'Василий', surname: 'Васильев', phone: '+7(987)222-5130', type: 3 }
]