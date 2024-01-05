import classNames from "classnames";

export function ToggleInstallments(props) {
  const { withInstallments, setWithInstallments } = props;

  function handleToggle() {
    setWithInstallments((prev) => !prev);
  }

  const classNamesLeftLabel = classNames("pricing-toggleLabel", {
    "pricing-toggleLabel--active": !withInstallments,
  });
  const classNamesRightLabel = classNames("pricing-toggleLabel", {
    "pricing-toggleLabel--active": withInstallments,
  });

  const classNamesToggle = classNames("toggle-container", {
    "toggle-container--active": withInstallments,
  });

  return (
    <div className="pricing-toggle">
      <p className={classNamesLeftLabel}>Un solo pago</p>
      <label htmlFor="switch" className="toggle">
        <input
          type="checkbox"
          id="switch"
          checked={withInstallments}
          onChange={handleToggle}
          aria-checked={withInstallments}
          role="switch"
          className="toggle-input"
        />
        <span
          tabIndex={0}
          onClick={handleToggle}
          aria-hidden="true"
          className={classNamesToggle}
        />
      </label>
      <p className={classNamesRightLabel}>Paga a cuotas</p>
    </div>
  );
}
