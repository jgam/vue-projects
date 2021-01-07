# vue-projects

## Refactoring

### removing duplicate logics using HOC(component)

**Previously**

router -> to each View component -> in created hooks, having spinner logic over and over is the problem

**solution**

router -> call createListView() with component as parameter.
Removed the spinner logic in the component easily

**customized**

Left my JobsView as it is, excluding from the HOC because it is following different design guidelines. But in order to match, I should fix the fetching inside to see it differently.
