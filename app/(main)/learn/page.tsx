import {StickyWrapper} from "@/components/stickyWrapper";
import {FeedWrapper} from "@/components/feedWrapper";
import {Header} from "@/app/(main)/learn/header";
import {UserProgress} from "@/components/userProgress";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={{
                        title: "Spanish",
                        imageSrc: "/language/es.svg"
                    }}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Spanish" />
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;
