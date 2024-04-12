import { useSelect } from "@refinedev/antd";
import { Select } from "antd";
export const ResourceSelect: React.FC<{resource:string}> = ({resource}) => {
  const {selectProps} = useSelect({
    resource,
    queryOptions:{
      staleTime: Infinity,
    },
  });
  return <Select {...selectProps}/>;
};