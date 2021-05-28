interface SwitchersState {
  language: string | null;
  currency: string | null;
  theme: string | null;
}
interface SwitchersAction {
  type: string;
	theme: string;
	currency: string;
	language: string;
}