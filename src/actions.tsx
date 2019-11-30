type ChangeTargetAddressAction = { type: 'changeTargetAddress', value: string | null };
type ChangeNetworkAction = { type: 'changeNetwork', value: string };

export type Action =
  | ChangeTargetAddressAction
  | ChangeNetworkAction;

export function changeTargetAddress(value: string | null): ChangeTargetAddressAction {
  return { type: 'changeTargetAddress', value };
}

export function changeNetwork(value: string): ChangeNetworkAction {
  return { type: 'changeNetwork', value };
}
