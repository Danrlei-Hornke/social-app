export const StorageService = {
	get: (key: string, defaultValue: any): object | string => {
		const value = localStorage.getItem(key) || defaultValue;
		try {
			return JSON.parse(value);
		} catch {
			return value;
		}
	},
	set: (key: string, value: string | object): void => {
		if (typeof value === "object") value = JSON.stringify(value);
		localStorage.setItem(key, value);
	},
	remove: (key: string): void => {
		localStorage.removeItem(key);
	},
};
