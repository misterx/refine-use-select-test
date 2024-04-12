import { useSelect } from "@refinedev/antd";
import { Select } from "antd";
import {useQuery} from "@tanstack/react-query";
import { useDataProvider } from "@refinedev/core";

export const ResourceSelect: React.FC<{resource:string}> = ({resource}) => {
  const {selectProps} = useSelect({
    resource,
    queryOptions:{
      staleTime: 1000,
    },
  });
  return <Select {...selectProps}/>;
};

export const ResourceUseQuerySelect: React.FC<{resource:string}> = ({resource}) => {
  const dataProvider  = useDataProvider()();
  const {data} = useQuery(['usersTestQuery'],()=>dataProvider.getList({resource}),{staleTime:1000});
  return <Select/>;
};