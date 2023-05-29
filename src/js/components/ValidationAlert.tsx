export default function ValidationAlert({ element }: { element: string }) {
  const elementAlert = element.concat("Alert");
  return <div className="inputerror">{localStorage[elementAlert]}</div>;
}
