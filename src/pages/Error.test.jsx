import renderer from 'react-test-renderer';
import ErrorPage from "./Error";

it('renders without errors', () => {
    const component = renderer.create(
        <Error />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});