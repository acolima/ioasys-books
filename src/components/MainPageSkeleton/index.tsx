import styled from 'styled-components';

function MainPageSkeleton() {
	const booksSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	return (
		<Skeleton>
			{booksSkeleton.map((book) => (
				<Book key={book} />
			))}
		</Skeleton>
	);
}

export default MainPageSkeleton;

const Skeleton = styled.div`
	width: 80%;

	margin: 0 auto;

	display: grid;
	grid-template-columns: repeat(4, auto);
	justify-content: space-between;

	row-gap: 16px;

	@media (max-width: 1201px) {
		grid-template-columns: repeat(3, auto);
	}

	@media (max-width: 901px) {
		width: 90%;
		grid-template-columns: repeat(2, auto);
		justify-content: space-around;
	}

	@media (max-width: 601px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
	}
`;

const Book = styled.div`
	width: 272px;
	min-height: 170px;

	animation: skeleton-loading 1s linear infinite alternate;

	@keyframes skeleton-loading {
		0% {
			background-color: hsl(200, 20%, 80%);
		}
		100% {
			background-color: hsl(200, 20%, 90%);
		}
	}

	@media (max-width: 1401px) {
		width: 252px;
	}

	@media (max-width: 601px) {
		min-width: 90%;
	}
`;
