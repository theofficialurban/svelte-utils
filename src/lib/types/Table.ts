export default interface TableColumn<T extends Record<string, unknown>> {
	title: string;
	key: keyof T;
}
