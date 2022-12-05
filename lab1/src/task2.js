const posts = [
    {id: 1, title: 'First Name', name: 'John'},
    {id: 2, title: 'Last Name', name: 'Silver'},
    {id: 3, title: 'Occupation', name: 'Pirate Captain'},
];
export function Test()
{
    Columns(posts)
}

export function Columns(posts)
{
    return (
        <table>
            <tr>
                <th>{posts.title}</th>
                <td>{posts.name}</td>
            </tr>
        </table>
    )
}
export default Test;
