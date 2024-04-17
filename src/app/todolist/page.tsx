import { DataTable } from "@/components/Resources/DataTable/datatable";
import { Menu } from "@/components/Resources/Tabs/tabs";

export default function Todolist() {

    return (
        <div>
            <div className="grid grid-cols-2 mr-5 ml-5">
                <Menu />
            </div>
            <div className="grid grid-cols-2 mr-5 ml-5">
                <div className="mr-2">
                    <DataTable />
                </div>
                <div>
                    <DataTable />
                </div>
            </div>
        </div>
    );
}