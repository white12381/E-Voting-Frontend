import { Table } from "antd";

const VeiwDecisionRoom = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
        },
    ]
    const data = [
        {
            key: '1', count: 30, name: "Usman Gbolahan"
        }
    ];
    return <>
        <h1 className="dashboardPage">   Room 1 </h1>
        <p className="mt-4 text-sm text-gray-600 font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellendus similique fuga quia exercitationem labore, quis omnis soluta, officiis dolorum corrupti. Veniam alias ipsa doloribus inventore reiciendis doloremque voluptate et?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deserunt eius incidunt eum temporibus fuga iure dolores tempore reiciendis. Esse exercitationem ab quas. Ut adipisci, maxime doloribus tenetur commodi eos?
        </p>
        <h2 className="dashboardPage my-6">   Contenstant </h2>

        <Table columns={columns} dataSource={data} />

    </>
}
export default VeiwDecisionRoom