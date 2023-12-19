export const mutationLogin = async () => {
	const res = await fetch(
		'https://api.themoviedb.org/3/authentication/guest_session/new',
		{
			headers: {
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTFhOTBhMTE2YjEzMWRkYTEwNmNlMmJmMTdmNjExMyIsInN1YiI6IjYzMjEwZTA1NTExZDA5MDA5ODUxN2M0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oi_jF5uiQI_0uwe0Jy8Ip6Gm2AAn3FxlSztrJZllduY'

			},
		}
	);
	console.log(res.json());

	return res.json();
};
