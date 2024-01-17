// import { useIsFetching } from "@tanstack/react-query";
import { useTodos, useTodoIds } from "../services/queries"

export default function Todo() {
    const todosIdsQuery = useTodoIds();
    // const isFetching = useIsFetching();
    const todosQueries = useTodos(todosIdsQuery.data);

    // if(todosIdsQuery.isPending)  {
    //     return <span>loading...</span>
    // }

    // if(todosIdsQuery.isError){
    //     return <span>there is an Error</span>
    // }
    
  return (
    <>
    {/* <p>Query function status {todosIdsQuery.fetchStatus}</p> */}
    {/* <p>Query data status: {todosIdsQuery.status}</p> */}
    {/* <p>Global isFetching: {isFetching}</p> */}
      {todosIdsQuery.data?.map((id) => (
        <p key={id}>id: {id}</p>
      ))}

        <ul>
        {todosQueries.map(({data})=> (
            <li key={data?.id}>
                <div>Id: {data?.id}</div>
                <span>
                    <strong>Title:</strong> {data?.title},{" "}
                    <strong>Description:</strong> {data?.desciption}
                </span>
            </li>
            ))}
        </ul>
    </>
  )
}
