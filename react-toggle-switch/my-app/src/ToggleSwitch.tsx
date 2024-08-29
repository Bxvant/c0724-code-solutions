type Props = {
  switchOnOff: string;
  onToggle: () => void;
};

export function ToggleSwitch({ switchOnOff, onToggle }: Props) {
  return (
    <div className={switchOnOff} onClick={onToggle} id="switch-toggle">
      <div className={switchOnOff} id="switch-background"></div>
    </div>
  );
}
