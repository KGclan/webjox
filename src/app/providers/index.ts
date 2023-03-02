import compose from "compose-function";
import { withRouter } from "./withRouter";
import { withStore } from "./withStore";

const withProviders = compose(withRouter, withStore);

export default withProviders;