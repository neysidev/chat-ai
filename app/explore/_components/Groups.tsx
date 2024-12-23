import GroupItem from "./GroupItem"

export default function Groups() {
  return (
    <div data-title="Categories" className="pt-4 space-y-8">
      <GroupItem
        title="Trending"
        value="trending"
        description="Most popular GPTs by our community"
      />
      <GroupItem
        title="Writing"
        value="writing"
        description="Enhance your writing with tools for creation, editing, and style refinement"
      />
      <GroupItem
        title="Productivity"
        value="productivity"
        description="Increase your efficiency"
      />
      <GroupItem
        title="Education"
        value="education"
        description="Explore new ideas, revisit existing skills"
      />
      <GroupItem
        title="Lifestyle"
        value="lifestyle"
        description="Get tips on travel, workouts, style, food, and more"
      />
      <GroupItem
        title="Programming"
        value="programming"
        description="Write code, debug, test, and learn"
      />
    </div>
  )
}
