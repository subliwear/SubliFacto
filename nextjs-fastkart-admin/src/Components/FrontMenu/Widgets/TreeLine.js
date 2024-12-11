import React from "react";
import { useRouter } from "next/navigation";
import Options from "../../Table/Options";

const TreeLine = ({ data, level, active, setActive, type, mutate, loading }) => {
  const router = useRouter();

  if (!data) return null;
  return (
    <ul>
      {data.map((item, i) => {
        return <li key={i} className={item.child?.length ? "inside-ul" : ""} style={{ color: router?.query?.updateId == item.id ? "#0da487" : "" }}>
          <div className={`${item.status == 0 ? "disabled" : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (item.child) {
                let temp = active;
                active.includes(item.id) ? temp.splice(active.indexOf(item.id), 1) : (temp = [...active, item.id]);
                setActive([...temp]);
              }
            }}>
            <i className="tree-icon file-icon" role="presentation"></i>
            {item.title}
            <div className="tree-options">
              <Options fullObj={item} mutate={mutate} type={type} loading={loading} keyInPermission={"category"} />
            </div>
          </div>
          {item.child && (
            <div className={active.includes(item.id) ? "d-block" : "d-none"}>
              <TreeLine data={item.child} level={level + 1} active={active} setActive={setActive} mutate={mutate} type={type} />
            </div>
          )}
        </li>
      })
      }
    </ul >
  );
};

export default TreeLine;
