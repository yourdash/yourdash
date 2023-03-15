const SERVER = {
    delete(path: string, headers?: HeadersInit): Promise<Response> {
        console.log(
            `%c[%cSERVER%c]: %cDELETE%c ${path}`,
            "color:lightgray",
            "color:orange",
            "color:lightgray",
            "color:red",
            "color:lightgray"
        );
        const defaultHeaders = {
            "content-type": "application/json",
            sessiontoken: localStorage.getItem("sessiontoken") as string,
            username: localStorage.getItem("username") as string,
        } as HeadersInit;
        const url = localStorage.getItem("currentServer");
        return new Promise((resolve, reject) => {
            fetch(`${url}/api${path}`, {
                headers: {
                    ...defaultHeaders,
                    ...headers,
                },
                method: "DELETE",
            })
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    get(path: string, headers?: HeadersInit): Promise<Response> {
        console.log(
            `%c[%cSERVER%c]: %cGET%c ${path}`,
            "color:lightgray",
            "color:orange",
            "color:lightgray",
            "color:limegreen",
            "color:lightgray"
        );
        const defaultHeaders = {
            "content-type": "application/json",
            sessiontoken: localStorage.getItem("sessiontoken") as string,
            username: localStorage.getItem("username") as string,
        } as HeadersInit;
        const url = localStorage.getItem("currentServer");
        return new Promise((resolve, reject) => {
            fetch(`${url}/api${path}`, {
                headers: {
                    ...defaultHeaders,
                    ...headers,
                },
                method: "GET",
            })
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    post(path: string, extras: { headers?: HeadersInit; body?: string }): Promise<Response> {
        console.log(
            `%c[%cSERVER%c]: %cPOST%c ${path}`,
            "color:lightgray",
            "color:orange",
            "color:lightgray",
            "color:purple",
            "color:lightgray"
        );
        const defaultHeaders = {
            "content-type": "application/json",
            sessiontoken: localStorage.getItem("sessiontoken") as string,
            username: localStorage.getItem("username") as string,
        } as HeadersInit;
        const url = localStorage.getItem("currentServer");
        return new Promise((resolve, reject) => {
            fetch(`${url}/api${path}`, {
                body: extras?.body,
                headers: {
                    ...defaultHeaders,
                    ...extras?.headers,
                },
                method: "POST",
            })
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
};

export default SERVER;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function verifyAndReturnJson(req: Promise<Response>, res: (_res: any) => void, error: (json?: object) => void) {
    req.then((resp) => {
        resp.json()
            .then((json) => {
                if (!json.error) return res(json);
                error(json);
            })
            .catch(() => {
                error();
            });
    }).catch((err) => {
        console.error(err);
        error();
    });
}