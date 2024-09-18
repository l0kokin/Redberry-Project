import { ReactComponent as EmailIcon } from "../icons/email.svg";
import { ReactComponent as PhoneIcon } from "../icons/phone.svg";
import { AgentContainer, AgentInfo, FlexContainer } from "./AgentCardStyles";
import Loader from "./Loader";

function AgentCard({ agent }) {
  return agent ? (
    <AgentContainer>
      <FlexContainer>
        <img src={agent.avatar} alt="agent" />
        <div>
          <h2>
            {agent.name} {agent.surname}
          </h2>
          <h3 className="text-small">აგენტი</h3>
        </div>
      </FlexContainer>
      <AgentInfo>
        <EmailIcon /> {agent.email}
      </AgentInfo>
      <AgentInfo>
        <PhoneIcon /> {agent.phone}
      </AgentInfo>
    </AgentContainer>
  ) : (
    <Loader />
  );
}

export default AgentCard;
