
interface Props  {
  onValidSubmit?: (event: any, values: any) => void;
  onInvalidSubmit?: (event: any, errors: any, values: any) => void;
}

declare var AvForm: React.StatelessComponent<Props>;
export default AvForm;
