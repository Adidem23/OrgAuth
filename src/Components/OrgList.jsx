import { OrganizationList } from "@clerk/clerk-react";

const OrgList = () => {
    return (
        <>
            <OrganizationList afterSelectOrganizationUrl={org => `/organization/org_2c9B6noA6mdZHjxfwvUMTV3L4MR`} />
        </>
    )
}

export default OrgList