export const formatRepositoryName = (repositoryName: string) => {
    // Removes hyphen from repository name and puts a blank in its place
    return (
        repositoryName
            .replace(/-/g, " ")
            // Capitalize the first letter of each word that makes up the repository's name
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
    )
}
