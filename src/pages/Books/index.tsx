import useAuth from '../../hooks/useAuth';

function Books() {
	const { data } = useAuth();
	return <h1>{data?.name}</h1>;
}

export default Books;
