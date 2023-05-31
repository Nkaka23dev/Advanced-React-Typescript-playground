type ControlPanelProps = {
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
interface SpecialControlPanelforAdminOnly extends ControlPanelProps {
    idAdmin: true
}

type AdminControl = ControlPanelProps & { isAdmin: true };

type AdminControltwo = ControlPanelProps | { isAdmin: true };
/** 
 * Above are the main difference between interface and type in javascri[pt]
 * **/ 
export default function Controls({ name, onChange }: ControlPanelProps | AdminControl | SpecialControlPanelforAdminOnly) {
    return (
        <form
            className="flex flex-row gap-4 text-white bg-primary-10"
            onSubmit={(event) => event.preventDefault()}
        >
            <div>
                <label className="font-bold">Your Name</label>
                <input 
                    name="name"
                    className="w-full"
                    type="text"
                    value={name}
                    onChange={onChange}
                />
            </div>
        </form>
    );
}
